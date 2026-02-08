gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.page-header h1 span', { yPercent: 100, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.2 });
  gsap.from('.page-header p', { opacity: 0, duration: 0.7, delay: 0.5 });
  gsap.from('.breadcrumb', { opacity: 0, y: -10, duration: 0.5, delay: 0.1 });
  gsap.from('.filters-inner', { opacity: 0, y: 15, duration: 0.6, delay: 0.6 });

  gsap.utils.toArray('.prop-card').forEach((card, i) => {
    gsap.to(card, { opacity: 1, y: 0, duration: 0.8, delay: i * 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.properties-inner', start: 'top 75%' } });
  });
  gsap.utils.toArray('.prop-card-img').forEach((img, i) => {
    gsap.fromTo(img, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1, delay: 0.15 + i * 0.12, ease: 'power3.inOut', scrollTrigger: { trigger: '.properties-inner', start: 'top 75%' } });
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.prop-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach((card, i) => {
        const show = filter === 'all' || card.dataset.category === filter;
        gsap.to(card, { opacity: show ? 1 : 0.15, scale: show ? 1 : 0.97, filter: show ? 'none' : 'grayscale(0.8)', duration: 0.4, delay: i * 0.05, ease: 'power2.out' });
      });
    });
  });
  gsap.from('.footer-top', { opacity: 0, y: 25, duration: 0.8, scrollTrigger: { trigger: '.footer', start: 'top 85%' } });
});
