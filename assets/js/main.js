/**
 * SIVA KAVERI CHITS RBT - Design System Foundation Scripts
 * Telugu Heritage × Modern Finance
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLayerInspector();
  initParallaxEffects();
  initIntersectionObserver();
  initCopyTokens();
});

/**
 * Theme Toggle: Dark Forest Green <-> Warm Ivory Parchment
 */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const root = document.documentElement;

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'warm-ivory' ? 'dark-forest' : 'warm-ivory';
    
    root.setAttribute('data-theme', newTheme);
    toggleBtn.querySelector('.theme-label').textContent = 
      newTheme === 'warm-ivory' ? 'థీమ్: వార్మ్ ఐవరీ (లైట్)' : 'థీమ్: డీప్ ఫారెస్ట్ (డార్క్)';
  });
}

/**
 * Interactive Background Layer Inspector:
 * Allows user to toggle individual layers to visualize the Maximum-Background depth hierarchy
 */
function initLayerInspector() {
  const layerCheckboxes = document.querySelectorAll('[data-layer-target]');
  
  layerCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const targetSelector = e.target.getAttribute('data-layer-target');
      const targetElements = document.querySelectorAll(targetSelector);
      
      targetElements.forEach(el => {
        if (e.target.checked) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Parallax Motion for Abstract Telugu Watermarks & Ambient Spotlights
 */
function initParallaxEffects() {
  const watermarks = document.querySelectorAll('.telugu-watermark-bg');
  const spotlights = document.querySelectorAll('.lighting-spotlight-gold, .lighting-spotlight-terracotta');

  window.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 30;

    watermarks.forEach((wm, idx) => {
      const factor = (idx + 1) * 0.4;
      wm.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
    });

    spotlights.forEach((sp, idx) => {
      const factor = (idx + 1) * -0.6;
      sp.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
    });
  }, { passive: true });
}

/**
 * Reveal-on-Scroll Observer for Editorial Prose & Cards
 */
function initIntersectionObserver() {
  const revealElements = document.querySelectorAll('.anim-reveal-up, .anim-fade-in');
  
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Click-to-copy color token hex codes
 */
function initCopyTokens() {
  const swatchBoxes = document.querySelectorAll('.swatch-box');
  
  swatchBoxes.forEach(swatch => {
    swatch.style.cursor = 'pointer';
    swatch.addEventListener('click', () => {
      const hex = swatch.querySelector('.swatch-hex')?.textContent;
      if (hex) {
        navigator.clipboard?.writeText(hex);
        const nameEl = swatch.querySelector('.swatch-name');
        const originalText = nameEl.textContent;
        nameEl.textContent = 'కాపీ అయింది! ✓';
        setTimeout(() => {
          nameEl.textContent = originalText;
        }, 1500);
      }
    });
  });
}
