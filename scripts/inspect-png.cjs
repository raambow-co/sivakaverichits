const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('public/assets/images/logo.png');
console.log('Total file length:', buf.length);

let offset = 8;
const chunks = [];

while (offset < buf.length) {
  const length = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  console.log(`Chunk: ${type}, length: ${length}`);
  chunks.push({ type, offset: offset + 8, length });
  offset += 12 + length;
}

const ihdrOffset = chunks.find(c => c.type === 'IHDR').offset;
const width = buf.readUInt32BE(ihdrOffset);
const height = buf.readUInt32BE(ihdrOffset + 4);
const bitDepth = buf.readUInt8(ihdrOffset + 8);
const colorType = buf.readUInt8(ihdrOffset + 9);
console.log({ width, height, bitDepth, colorType });
