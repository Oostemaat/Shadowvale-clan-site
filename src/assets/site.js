const nav = document.querySelector('#nav');
document.querySelector('.mobile-menu')?.addEventListener('click', () => nav?.classList.toggle('open'));

const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
