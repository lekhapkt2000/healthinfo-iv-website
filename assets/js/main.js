/* ============================================================
   HEALTHINFO IV — Main JavaScript
   ============================================================ */

// ── Mobile Menu ──────────────────────────────────────────────
const menuToggle = document.getElementById('menu-toggle');
const mainNav    = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.header-wrapper')) {
      mainNav.classList.remove('active');
      menuToggle.classList.remove('open');
    }
  });

  mainNav.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });
}

// ── Header scroll effect ─────────────────────────────────────
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── Countdown Timer ──────────────────────────────────────────
function initCountdown() {
  const target = new Date('2026-10-02T08:00:00').getTime();
  const els = {
    days:    document.getElementById('cd-days'),
    hours:   document.getElementById('cd-hours'),
    minutes: document.getElementById('cd-minutes'),
    seconds: document.getElementById('cd-seconds'),
  };

  if (!els.days) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      Object.values(els).forEach(el => { if (el) el.textContent = '00'; });
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);
    els.days.textContent    = pad(d);
    els.hours.textContent   = pad(h);
    els.minutes.textContent = pad(m);
    els.seconds.textContent = pad(s);
  }

  tick();
  setInterval(tick, 1000);
}

initCountdown();

// ── Animated Stat Counters ───────────────────────────────────
function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start    = performance.now();

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// ── Scroll Reveal + Counter trigger ─────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;

    // Handle transition delay from inline style
    const delay = parseFloat(el.style.animationDelay) || 0;
    setTimeout(() => {
      el.classList.add('revealed');
    }, delay * 1000);

    revealObserver.unobserve(el);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left').forEach(el => {
  revealObserver.observe(el);
});

// Counter observer
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const counters = entry.target.querySelectorAll('.stat-number');
    counters.forEach(c => animateCounter(c));
    counterObserver.unobserve(entry.target);
  });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) counterObserver.observe(statsSection);

// ── Newsletter Form ──────────────────────────────────────────
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    if (input && input.value) {
      alert('Thank you for subscribing to HEALTHINFO IV updates!');
      input.value = '';
    }
  });
}

// ── Smooth Scroll for anchor links ───────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Active nav link ──────────────────────────────────────────
(function() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('nav-active');
    }
  });
})();

console.log('HEALTHINFO IV 2026 — loaded');
