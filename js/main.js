/* ============================================================
   GUIDENTRY — Main Entry Point
   ============================================================ */

import {
  initScrollReveal,
  initCounters,
  initNavScroll,
  initMobileMenu,
  initSmoothScroll,
  initMagneticButtons,
  initCursorGlow,
  initLoader,
  initParallax,
  initActiveNavLink,
} from './animations.js';

import { initParticles } from './particles.js';
import { initForms } from './forms.js';
import { initI18n } from './i18n.js';

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Core
  initLoader();
  initNavScroll();
  initMobileMenu();
  initSmoothScroll();
  initActiveNavLink();

  // Animations
  initScrollReveal();
  initCounters();
  initParallax();

  // Effects (desktop only)
  initMagneticButtons();
  initCursorGlow();

  // Particles (hero only)
  initParticles();

  // Forms
  initForms();

  // Language
  initI18n();
});
