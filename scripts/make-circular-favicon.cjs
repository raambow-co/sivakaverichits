const fs = require('fs');
const zlib = require('zlib');

// CRC32 table & calculation for PNG chunks
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(typeStr, dataBuf) {
  const typeBuf = Buffer.from(typeStr, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(dataBuf.length, 0);

  const toCrc = Buffer.concat([typeBuf, dataBuf]);
  const crcVal = crc32(toCrc);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crcVal, 0);

  return Buffer.concat([lenBuf, toCrc, crcBuf]);
}

function paethPredictor(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

function decodeRGBPNG(buffer) {
  let offset = 8;
  const chunks = [];
  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    chunks.push({ type, data: buffer.slice(offset + 8, offset + 8 + length) });
    offset += 12 + length;
  }

  const ihdr = chunks.find(c => c.type === 'IHDR').data;
  const width = ihdr.readUInt32BE(0);
  const height = ihdr.readUInt32BE(4);
  const bitDepth = ihdr.readUInt8(8);
  const colorType = ihdr.readUInt8(9);

  if (bitDepth !== 8 || colorType !== 2) {
    throw new Error(`Expected 8-bit RGB (colorType 2), got depth ${bitDepth}, color ${colorType}`);
  }

  const idatBuffers = chunks.filter(c => c.type === 'IDAT').map(c => c.data);
  const compressed = Buffer.concat(idatBuffers);
  const decompressed = zlib.inflateSync(compressed);

  const bytesPerPixel = 3;
  const stride = width * bytesPerPixel;
  const rawRgba = Buffer.alloc(width * height * 4);

  let inOffset = 0;
  let prevRow = Buffer.alloc(stride);

  for (let y = 0; y < height; y++) {
    const filterType = decompressed[inOffset++];
    const currentRow = Buffer.alloc(stride);

    for (let x = 0; x < stride; x++) {
      const filt = decompressed[inOffset++];
      const bpp = bytesPerPixel;
      const a = x >= bpp ? currentRow[x - bpp] : 0;
      const b = prevRow[x];
      const c = x >= bpp ? prevRow[x - bpp] : 0;

      let recon = 0;
      if (filterType === 0) recon = filt;
      else if (filterType === 1) recon = (filt + a) & 0xff;
      else if (filterType === 2) recon = (filt + b) & 0xff;
      else if (filterType === 3) recon = (filt + Math.floor((a + b) / 2)) & 0xff;
      else if (filterType === 4) recon = (filt + paethPredictor(a, b, c)) & 0xff;
      else throw new Error(`Unknown filter type ${filterType}`);

      currentRow[x] = recon;
    }

    // copy currentRow to rawRgba
    for (let px = 0; px < width; px++) {
      const r = currentRow[px * 3];
      const g = currentRow[px * 3 + 1];
      const b = currentRow[px * 3 + 2];
      const outIdx = (y * width + px) * 4;
      rawRgba[outIdx] = r;
      rawRgba[outIdx + 1] = g;
      rawRgba[outIdx + 2] = b;
      rawRgba[outIdx + 3] = 255;
    }

    prevRow = currentRow;
  }

  return { width, height, data: rawRgba };
}

function makeCircularAndResize(srcImage, targetSize) {
  const { width, height, data } = srcImage;
  const outBuf = Buffer.alloc(targetSize * targetSize * 4);

  const cx = (targetSize - 1) / 2;
  const cy = (targetSize - 1) / 2;
  const radius = (targetSize - 2) / 2;
  const borderThickness = Math.max(1.5, targetSize * 0.025);
  const outerRadius = radius;
  const innerRadius = radius - borderThickness;

  // Gold border color: #B88E38 => (184, 142, 56)
  const borderR = 184;
  const borderG = 142;
  const borderB = 56;

  for (let y = 0; y < targetSize; y++) {
    for (let x = 0; x < targetSize; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const outIdx = (y * targetSize + x) * 4;

      if (dist > outerRadius + 0.8) {
        // Fully transparent outside
        outBuf[outIdx] = 0;
        outBuf[outIdx + 1] = 0;
        outBuf[outIdx + 2] = 0;
        outBuf[outIdx + 3] = 0;
      } else {
        // Anti-aliased outer edge
        let alpha = 1.0;
        if (dist > outerRadius - 0.8) {
          alpha = Math.max(0, Math.min(1, (outerRadius + 0.8 - dist) / 1.6));
        }

        // Map x, y to srcImage coordinates using bilinear interpolation
        const srcX = (x / (targetSize - 1)) * (width - 1);
        const srcY = (y / (targetSize - 1)) * (height - 1);

        const x0 = Math.floor(srcX);
        const x1 = Math.min(width - 1, x0 + 1);
        const y0 = Math.floor(srcY);
        const y1 = Math.min(height - 1, y0 + 1);

        const wx = srcX - x0;
        const wy = srcY - y0;

        const i00 = (y0 * width + x0) * 4;
        const i10 = (y0 * width + x1) * 4;
        const i01 = (y1 * width + x0) * 4;
        const i11 = (y1 * width + x1) * 4;

        let r = (1 - wx) * (1 - wy) * data[i00] + wx * (1 - wy) * data[i10] + (1 - wx) * wy * data[i01] + wx * wy * data[i11];
        let g = (1 - wx) * (1 - wy) * data[i00+1] + wx * (1 - wy) * data[i10+1] + (1 - wx) * wy * data[i01+1] + wx * wy * data[i11+1];
        let b = (1 - wx) * (1 - wy) * data[i00+2] + wx * (1 - wy) * data[i10+2] + (1 - wx) * wy * data[i01+2] + wx * wy * data[i11+2];

        // If on the gold circular rim border
        if (dist >= innerRadius && dist <= outerRadius) {
          const borderFactor = Math.min(1, Math.max(0, (dist - innerRadius) / 1.2));
          r = r * (1 - borderFactor) + borderR * borderFactor;
          g = g * (1 - borderFactor) + borderG * borderFactor;
          b = b * (1 - borderFactor) + borderB * borderFactor;
        }

        outBuf[outIdx] = Math.round(r);
        outBuf[outIdx + 1] = Math.round(g);
        outBuf[outIdx + 2] = Math.round(b);
        outBuf[outIdx + 3] = Math.round(alpha * 255);
      }
    }
  }

  return { width: targetSize, height: targetSize, data: outBuf };
}

function encodeRGBAPNG(image) {
  const { width, height, data } = image;
  const bytesPerPixel = 4;
  const stride = width * bytesPerPixel;
  const uncompressed = Buffer.alloc(height * (stride + 1));

  let outOffset = 0;
  for (let y = 0; y < height; y++) {
    uncompressed[outOffset++] = 0; // filter type 0: None
    const rowStart = y * stride;
    data.copy(uncompressed, outOffset, rowStart, rowStart + stride);
    outOffset += stride;
  }

  const compressed = zlib.deflateSync(uncompressed, { level: 9 });

  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // bit depth 8
  ihdrData.writeUInt8(6, 9); // color type 6 (RGBA)
  ihdrData.writeUInt8(0, 10); // compression 0
  ihdrData.writeUInt8(0, 11); // filter 0
  ihdrData.writeUInt8(0, 12); // interlace 0

  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Read original logo
const rawBuffer = fs.readFileSync('public/assets/images/logo.png');
console.log('Decoding original PNG...');
const decoded = decodeRGBPNG(rawBuffer);
console.log(`Decoded: ${decoded.width}x${decoded.height}`);

// 1. High-res circular PNG (512x512)
console.log('Generating 512x512 circular PNG...');
const circ512 = makeCircularAndResize(decoded, 512);
const png512 = encodeRGBAPNG(circ512);

// 2. Standard favicon PNG (192x192)
console.log('Generating 192x192 circular PNG...');
const circ192 = makeCircularAndResize(decoded, 192);
const png192 = encodeRGBAPNG(circ192);

// 3. Small favicon PNG (64x64)
console.log('Generating 64x64 circular PNG...');
const circ64 = makeCircularAndResize(decoded, 64);
const png64 = encodeRGBAPNG(circ64);

// 4. Tiny favicon PNG (32x32)
console.log('Generating 32x32 circular PNG...');
const circ32 = makeCircularAndResize(decoded, 32);
const png32 = encodeRGBAPNG(circ32);

// Write outputs to public and root
fs.writeFileSync('public/favicon.png', png192);
fs.writeFileSync('public/favicon-32x32.png', png32);
fs.writeFileSync('public/favicon-64x64.png', png64);
fs.writeFileSync('public/apple-touch-icon.png', png192);
fs.writeFileSync('public/assets/images/logo-circular.png', png512);

// Also generate circular SVG favicon
const base64Png512 = png512.toString('base64');
const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <clipPath id="circleClip">
      <circle cx="256" cy="256" r="250" />
    </clipPath>
  </defs>
  <!-- Circular White Background & Gold Accent Rim -->
  <circle cx="256" cy="256" r="256" fill="#B88E38" />
  <circle cx="256" cy="256" r="248" fill="#FFFFFF" />
  <g clip-path="url(#circleClip)">
    <image href="data:image/png;base64,${base64Png512}" x="0" y="0" width="512" height="512" />
  </g>
  <circle cx="256" cy="256" r="250" fill="none" stroke="#B88E38" stroke-width="8" />
</svg>`;

fs.writeFileSync('public/favicon.svg', svgFavicon);

console.log('Circular favicons successfully generated in PNG & SVG formats!');
