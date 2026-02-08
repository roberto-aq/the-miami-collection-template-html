gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.page-header h1 span', { yPercent: 100, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.2 });
  gsap.from('.page-header p', { opacity: 0, duration: 0.7, delay: 0.5 });
  gsap.from('.breadcrumb', { opacity: 0, y: -10, duration: 0.5, delay: 0.1 });

  gsap.utils.toArray('.timeline-step').forEach((step, i) => {
    gsap.to(step, { opacity: 1, y: 0, duration: 0.8, delay: i * 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.timeline', start: 'top 75%' } });
  });

  gsap.from('.calc-form', { opacity: 0, x: -30, duration: 0.8, scrollTrigger: { trigger: '.calculator', start: 'top 70%' } });
  gsap.from('.calc-result', { opacity: 0, x: 30, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: '.calculator', start: 'top 70%' } });

  gsap.utils.toArray('.faq-item').forEach((item, i) => {
    gsap.to(item, { opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.faq-list', start: 'top 75%' } });
  });

  // Calculator logic
  const amountInput = document.getElementById('calcAmount');
  const rangeInput = document.getElementById('calcRange');
  const optBtns = document.querySelectorAll('.calc-opt');
  let years = 3; const roi = 0.145;

  function updateCalc() {
    const amount = parseInt(amountInput.value) || 5000;
    const total = amount * Math.pow(1 + roi, years);
    const gain = total - amount;
    document.getElementById('resultInvest').textContent = '$' + amount.toLocaleString();
    document.getElementById('resultROI').textContent = (roi * 100).toFixed(1) + '%';
    gsap.to({ val: 0 }, { val: total, duration: 0.6, ease: 'power2.out', onUpdate: function() { document.getElementById('resultTotal').textContent = '$' + Math.round(this.targets()[0].val).toLocaleString(); } });
    gsap.to({ val: 0 }, { val: gain, duration: 0.6, ease: 'power2.out', onUpdate: function() { document.getElementById('resultGain').textContent = '+$' + Math.round(this.targets()[0].val).toLocaleString(); } });
  }

  amountInput.addEventListener('input', () => { rangeInput.value = amountInput.value; updateCalc(); });
  rangeInput.addEventListener('input', () => { amountInput.value = rangeInput.value; updateCalc(); });
  optBtns.forEach(btn => { btn.addEventListener('click', () => { optBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); years = parseInt(btn.dataset.years); updateCalc(); }); });
  updateCalc();
  gsap.from('.footer-top', { opacity: 0, y: 25, duration: 0.8, scrollTrigger: { trigger: '.footer', start: 'top 85%' } });
});
