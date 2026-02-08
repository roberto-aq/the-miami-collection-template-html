gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.page-header h1 span', { yPercent: 100, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.2 });
  gsap.from('.page-header p', { opacity: 0, duration: 0.7, delay: 0.5 });
  gsap.from('.breadcrumb', { opacity: 0, y: -10, duration: 0.5, delay: 0.1 });

  // Search box reveal
  gsap.to('.search-box', { opacity: 1, y: 0, duration: 0.7, delay: 0.5, ease: 'power3.out' });

  // Help cards stagger
  gsap.utils.toArray('.help-card').forEach((card, i) => {
    gsap.to(card, {
      opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.categories-inner', start: 'top 75%' }
    });
  });

  // Banner reveal
  gsap.from('.banner-inner', {
    opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '.support-banner', start: 'top 80%' }
  });

  // Search filter functionality
  const searchInput = document.getElementById('supportSearch');
  const cards = document.querySelectorAll('.help-card');

  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const match = !query || text.includes(query);

      gsap.to(card, {
        opacity: match ? 1 : 0.15,
        scale: match ? 1 : 0.98,
        filter: match ? 'none' : 'grayscale(0.5)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  gsap.from('.footer-top', { opacity: 0, y: 25, duration: 0.8, scrollTrigger: { trigger: '.footer', start: 'top 85%' } });
});
