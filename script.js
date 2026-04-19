const revealItems = document.querySelectorAll('.reveal');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.14,
  }
);

revealItems.forEach((item) => observer.observe(item));

const shell = document.querySelector('.site-shell');
window.addEventListener('pointermove', (event) => {
  if (!shell) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 18;
  const y = (event.clientY / window.innerHeight - 0.5) * 18;
  shell.style.transform = `translate(${x}px, ${y}px)`;
});
