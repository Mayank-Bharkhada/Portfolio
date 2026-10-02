import './styles.css';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const glow = document.querySelector('.cursor-glow');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('[data-section]')];
const revealItems = document.querySelectorAll('.reveal');
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

if (!prefersReducedMotion && glow) {
  window.addEventListener('pointermove', (event) => {
    glow.style.transform = `translate3d(${event.clientX - 160}px, ${event.clientY - 160}px, 0)`;
  }, { passive: true });
}

const tiltCards = document.querySelectorAll('.tilt-card');
if (!prefersReducedMotion) {
  tiltCards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const intensity = card.classList.contains('hero-orbit') ? 9 : 5;
      card.style.setProperty('--tilt-x', `${(-y * intensity).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${(x * intensity).toFixed(2)}deg`);
      card.style.setProperty('--shine-x', `${((x + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty('--shine-y', `${((y + 0.5) * 100).toFixed(1)}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--shine-x', '50%');
      card.style.setProperty('--shine-y', '50%');
    });
  });
}

if (prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  revealItems.forEach((item) => observer.observe(item));
}

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const current = entry.target.dataset.section;
    navLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.nav === current));
  });
}, { threshold: 0.35, rootMargin: '-12% 0px -55% 0px' });
sections.forEach((section) => sectionObserver.observe(section));

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    projectCards.forEach((card) => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-filtered', !visible);
      card.setAttribute('aria-hidden', String(!visible));
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
