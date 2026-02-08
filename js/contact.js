gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.page-header h1 span', { yPercent: 100, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.2 });
  gsap.from('.page-header p', { opacity: 0, duration: 0.7, delay: 0.5 });
  gsap.from('.breadcrumb', { opacity: 0, y: -10, duration: 0.5, delay: 0.1 });

  // Info cards stagger from left
  gsap.utils.toArray('.info-card').forEach((card, i) => {
    gsap.to(card, { opacity: 1, x: 0, duration: 0.7, delay: 0.3 + i * 0.12, ease: 'power3.out' });
  });

  // Map fade in
  gsap.to('.map-embed', { opacity: 1, duration: 0.8, delay: 0.8 });

  // Form slide up
  gsap.to('.contact-form', { opacity: 1, y: 0, duration: 0.9, delay: 0.4, ease: 'power3.out' });

  // Form submit feedback
  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = '✓ Mensaje enviado';
    btn.style.background = '#3cb878';
    gsap.from(btn, { scale: 0.95, duration: 0.3, ease: 'back.out(2)' });
    setTimeout(() => { btn.innerHTML = original; btn.style.background = ''; }, 3000);
  });

  gsap.from('.footer-top', { opacity: 0, y: 25, duration: 0.8, scrollTrigger: { trigger: '.footer', start: 'top 85%' } });
});
