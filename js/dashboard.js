gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {

  // Welcome reveal
  gsap.to('.dash-welcome', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2 });

  // Metric cards stagger + counter animation
  const metricCards = document.querySelectorAll('.metric-card');
  metricCards.forEach((card, i) => {
    gsap.to(card, { opacity: 1, y: 0, duration: 0.7, delay: 0.3 + i * 0.1, ease: 'power3.out' });

    const valEl = card.querySelector('.metric-value');
    const target = parseInt(valEl.dataset.target);
    const isPlain = valEl.classList.contains('metric-value--plain');
    const counter = { val: 0 };

    gsap.to(counter, {
      val: target, duration: 1.8, delay: 0.5 + i * 0.1, ease: 'power2.out',
      onUpdate: () => {
        valEl.textContent = isPlain ? Math.round(counter.val) : '$' + Math.round(counter.val).toLocaleString();
      }
    });
  });

  // Chart card + allocation card reveal
  gsap.to('.dash-chart-card', { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' });
  gsap.to('.dash-alloc-card', { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' });

  // Chart line draw animation
  gsap.to('.chart-line', { strokeDashoffset: 0, duration: 2, delay: 1, ease: 'power2.out' });
  gsap.to('.chart-fill', { opacity: 1, duration: 0.8, delay: 2 });
  gsap.to('.chart-dot', { opacity: 1, duration: 0.4, delay: 2.5 });

  // Donut ring animation - start from 0
  const rings = document.querySelectorAll('.alloc-ring circle[class]');
  rings.forEach(ring => {
    const final = ring.getAttribute('stroke-dasharray');
    ring.setAttribute('stroke-dasharray', '0 314');
    gsap.to(ring, { attr: { 'stroke-dasharray': final }, duration: 1.5, delay: 1.2, ease: 'power2.out' });
  });

  // Investments table reveal
  gsap.to('.dash-investments', { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: 'power3.out' });

  // Investment rows stagger
  gsap.from('.invest-row', { opacity: 0, x: -15, duration: 0.5, stagger: 0.1, delay: 1.3, ease: 'power2.out' });

  // Activity reveal
  gsap.to('.dash-activity', { opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: 'power3.out' });

  gsap.from('.activity-item', { opacity: 0, x: -10, duration: 0.4, stagger: 0.08, delay: 1.5, ease: 'power2.out' });
});
