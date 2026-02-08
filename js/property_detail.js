gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {

  // Gallery functionality
  const mainImgs = document.querySelectorAll('.prop-gallery-main img');
  const sideImgs = document.querySelectorAll('.prop-gallery-side img, .prop-gallery-side .gallery-more');
  let currentSlide = 0;

  function goToSlide(i) {
    mainImgs[currentSlide].classList.remove('active');
    gsap.to(mainImgs[currentSlide], { opacity: 0, duration: 0.4 });
    currentSlide = i;
    mainImgs[currentSlide].classList.add('active');
    gsap.fromTo(mainImgs[currentSlide], { opacity: 0, scale: 1.03 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' });
  }

  sideImgs.forEach(img => {
    img.addEventListener('click', () => {
      const i = parseInt(img.dataset.i);
      if (!isNaN(i) && i < mainImgs.length) goToSlide(i);
    });
  });

  // Hero gallery reveal
  gsap.from('.prop-gallery', { opacity: 0, y: 30, duration: 1, ease: 'power3.out', delay: 0.2 });

  // Header reveal
  gsap.from('.prop-header-left', { opacity: 0, x: -25, duration: 0.8, delay: 0.4, ease: 'power3.out' });
  gsap.from('.prop-header-right', { opacity: 0, x: 25, duration: 0.8, delay: 0.5, ease: 'power3.out' });

  // Info blocks stagger on scroll
  gsap.utils.toArray('.info-block').forEach((block, i) => {
    gsap.to(block, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: block, start: 'top 78%' }
    });
  });

  // Progress timeline steps stagger
  gsap.utils.toArray('.progress-step').forEach((step, i) => {
    gsap.to(step, {
      opacity: 1, x: 0, duration: 0.7, delay: i * 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.progress-timeline', start: 'top 75%' }
    });
  });

  // Progress bar fill animation
  document.querySelectorAll('.progress-bar-fill').forEach(bar => {
    const target = bar.dataset.progress;
    gsap.to(bar, {
      width: target + '%', duration: 1.5, ease: 'power2.out',
      scrollTrigger: { trigger: bar, start: 'top 80%' }
    });
  });

  // Sidebar progress fill
  document.querySelectorAll('.sidebar-progress-fill').forEach(bar => {
    gsap.to(bar, {
      width: bar.dataset.p + '%', duration: 1.2, ease: 'power2.out', delay: 0.8
    });
  });

  // Financial cards stagger
  gsap.from('.fin-card', {
    opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power2.out',
    scrollTrigger: { trigger: '.financial-grid', start: 'top 75%' }
  });

  // Spec items stagger
  gsap.from('.spec-item', {
    opacity: 0, scale: 0.95, duration: 0.5, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: '.specs-grid', start: 'top 75%' }
  });

  // Amenities stagger
  gsap.from('.amenity', {
    opacity: 0, x: -10, duration: 0.4, stagger: 0.06, ease: 'power2.out',
    scrollTrigger: { trigger: '.amenities-grid', start: 'top 78%' }
  });

  // Document items
  gsap.from('.doc-item', {
    opacity: 0, x: -15, duration: 0.5, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: '.docs-list', start: 'top 80%' }
  });

  // Sidebar nav active tracking
  const sections = document.querySelectorAll('.info-block[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });

  gsap.from('.footer-top', { opacity: 0, y: 25, duration: 0.8, scrollTrigger: { trigger: '.footer', start: 'top 85%' } });
});
