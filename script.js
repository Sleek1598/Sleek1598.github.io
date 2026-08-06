const year = document.getElementById('year');
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-navigation');
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const revealItems = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (year) year.textContent = String(new Date().getFullYear());

function closeNavigation() {
  if (!navToggle || !primaryNav) return;
  navToggle.setAttribute('aria-expanded', 'false');
  primaryNav.classList.remove('open');
  document.body.classList.remove('nav-open');
}

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(willOpen));
    primaryNav.classList.toggle('open', willOpen);
    document.body.classList.toggle('nav-open', willOpen);
  });

  navLinks.forEach((link) => link.addEventListener('click', closeNavigation));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeNavigation();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });
}

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visibleSection) return;

      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${visibleSection.target.id}`;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    },
    { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.35] }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}
