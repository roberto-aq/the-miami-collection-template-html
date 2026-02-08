gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.page-header h1 span', { yPercent: 100, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.2 });
  gsap.from('.page-header p', { opacity: 0, duration: 0.7, delay: 0.5 });
  gsap.from('.breadcrumb', { opacity: 0, y: -10, duration: 0.5, delay: 0.1 });

  gsap.to('.story-img', { opacity: 1, duration: 1, scrollTrigger: { trigger: '.story', start: 'top 70%' } });
  gsap.fromTo('.story-img', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power3.inOut', scrollTrigger: { trigger: '.story', start: 'top 70%' } });
  gsap.from('.story-text > *', { opacity: 0, y: 20, duration: 0.7, stagger: 0.1, scrollTrigger: { trigger: '.story-text', start: 'top 75%' } });

  gsap.utils.toArray('.value-card').forEach((c, i) => { gsap.to(c, { opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.values-grid', start: 'top 75%' } }); });
  gsap.utils.toArray('.team-card').forEach((c, i) => { gsap.to(c, { opacity: 1, y: 0, duration: 0.8, delay: i * 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.team-grid', start: 'top 75%' } }); });
  gsap.utils.toArray('.team-photo').forEach((p, i) => { gsap.fromTo(p, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1, delay: i * 0.12, ease: 'power3.inOut', scrollTrigger: { trigger: '.team-grid', start: 'top 75%' } }); });

  gsap.from('.footer-top', { opacity: 0, y: 25, duration: 0.8, scrollTrigger: { trigger: '.footer', start: 'top 85%' } });
});
