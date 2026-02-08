/* ========================================
   THE MIAMI COLLECTION — GSAP + Interactivity
   
   Animaciones con propósito:
   1. Loader → DrawSVG-style del logo + barra de carga
   2. Hero text reveal → Líneas escalonadas (elegancia inmobiliaria)
   3. Galería → Slider funcional con transición GSAP
   4. Stats bar → Counter animation (credibilidad/social proof)
   5. Gráfico de barras → Se eleva al scroll (dato = crecimiento)
   6. Propiedades → Slider vertical con parallax en imagen
   7. Why cards → Stagger reveal (beneficios uno a uno)
   8. CTA → Text reveal simétrico al hero (cierre narrativo)
   ======================================== */

gsap.registerPlugin(ScrollTrigger);

// ============================================
// LOADER
// ============================================
function initLoader() {
  const tl = gsap.timeline({ onComplete: initPage });

  tl.to('.loader-icon', {
    opacity: 1,
    duration: 0.4
  })
  .to('.loader-triangle', {
    strokeDashoffset: 0,
    duration: 1.2,
    ease: 'power2.inOut'
  })
  .to('.loader-text', {
    opacity: 1,
    duration: 0.5
  }, '-=0.5')
  .to('.loader-bar', {
    opacity: 1,
    duration: 0.3
  }, '-=0.3')
  .to('.loader-bar-fill', {
    width: '100%',
    duration: 1,
    ease: 'power1.inOut'
  })
  .to('.loader-inner', {
    opacity: 0,
    y: -20,
    duration: 0.4
  })
  .to('.loader', {
    yPercent: -100,
    duration: 0.7,
    ease: 'power3.inOut'
  })
  .set('.loader', { display: 'none' });
}

// ============================================
// PAGE INIT
// ============================================
function initPage() {
  initNavbar();
  initHero();
  initGallery();
  initStats();
  initChart();
  initPropertySlider();
  initWhyCards();
  initCTA();
  initFooter();
}

// ============================================
// NAVBAR — Slide in después del loader
// ============================================
function initNavbar() {
  gsap.to('.navbar', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.1
  });

  // Navbar background on scroll
  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      document.querySelector('.navbar').style.background =
        self.direction === 1
          ? 'rgba(13, 15, 13, 0.95)'
          : 'rgba(13, 15, 13, 0.85)';
    }
  });
}

// ============================================
// HERO — Text reveal + galería fade in
// El reveal escalonado guía la lectura del
// pitch de inversión de arriba a abajo.
// ============================================
function initHero() {
  const tl = gsap.timeline({ delay: 0.1 });

  // Wrap cada línea
  document.querySelectorAll('.hero-line').forEach(line => {
    const text = line.innerHTML;
    line.innerHTML = `<span style="display:inline-block">${text}</span>`;
  });

  tl.from('.hero-line span', {
    yPercent: 120,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.1
  })
  .to('.hero-desc', {
    opacity: 1,
    duration: 0.7,
    ease: 'power2.out'
  }, '-=0.4')
  .to('.hero-text .btn', {
    opacity: 1,
    duration: 0.7,
    ease: 'power2.out'
  }, '-=0.4')
  .to('.hero-gallery', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out'
  }, '-=0.6');

  // Parallax suave del hero al scroll
  gsap.to('.hero-gallery', {
    yPercent: -8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
}

// ============================================
// GALLERY — Slider funcional con GSAP
// La galería muestra las propiedades
// disponibles con transiciones suaves.
// ============================================
function initGallery() {
  const slides = document.querySelectorAll('.gallery-slide');
  const thumbs = document.querySelectorAll('.thumb');
  const currentEl = document.getElementById('galleryCurrent');
  let current = 0;
  const total = slides.length;

  function goToSlide(index) {
    if (index === current) return;

    // Fade out current
    gsap.to(slides[current], {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    });

    slides[current].classList.remove('active');
    thumbs.forEach(t => t.classList.remove('active'));

    current = ((index % total) + total) % total;

    slides[current].classList.add('active');
    if (thumbs[current]) thumbs[current].classList.add('active');

    // Fade in + subtle zoom
    gsap.fromTo(slides[current],
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }
    );

    currentEl.textContent = current + 1;
  }

  document.getElementById('galleryNext').addEventListener('click', () => goToSlide(current + 1));
  document.getElementById('galleryPrev').addEventListener('click', () => goToSlide(current - 1));
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => goToSlide(parseInt(thumb.dataset.index)));
  });

  // Auto-slide cada 5s
  let autoSlide = setInterval(() => goToSlide(current + 1), 5000);

  // Pausar auto-slide en hover
  document.querySelector('.gallery-main').addEventListener('mouseenter', () => clearInterval(autoSlide));
  document.querySelector('.gallery-main').addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => goToSlide(current + 1), 5000);
  });
}

// ============================================
// STATS BAR — Counters + stagger reveal
// Los números creciendo transmiten crecimiento
// y credibilidad al inversionista.
// ============================================
function initStats() {
  const items = document.querySelectorAll('.stat-bar-item');

  items.forEach((item, i) => {
    const numberEl = item.querySelector('.stat-bar-number');
    const target = parseInt(numberEl.dataset.target);

    // Reveal
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: i * 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.stats-bar',
        start: 'top 80%',
      }
    });

    // Counter
    const counter = { val: 0 };
    gsap.to(counter, {
      val: target,
      duration: 2,
      delay: i * 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.stats-bar',
        start: 'top 80%',
      },
      onUpdate: () => {
        numberEl.textContent = Math.round(counter.val).toLocaleString();
      }
    });
  });
}

// ============================================
// CHART — Barras que crecen al scroll
// Las barras elevándose desde 0 representan
// visualmente el crecimiento de la inversión.
// Es la metáfora perfecta: la barra sube = 
// tu inversión sube.
// ============================================
function initChart() {
  // Section header reveal
  gsap.from('.investment .section-tag', {
    opacity: 0,
    y: 15,
    duration: 0.7,
    scrollTrigger: {
      trigger: '.investment',
      start: 'top 70%',
    }
  });

  gsap.from('.investment-title', {
    opacity: 0,
    y: 25,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.investment',
      start: 'top 70%',
    }
  });

  gsap.from('.investment-desc', {
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.investment',
      start: 'top 70%',
    }
  });

  gsap.from('.investment .btn', {
    opacity: 0,
    y: 15,
    duration: 0.6,
    delay: 0.4,
    scrollTrigger: {
      trigger: '.investment',
      start: 'top 70%',
    }
  });

  // Chart bars animation
  const bars = document.querySelectorAll('.chart-bar');

  bars.forEach((bar, i) => {
    const targetHeight = bar.dataset.height;

    gsap.to(bar, {
      height: targetHeight + '%',
      duration: 1.2,
      delay: i * 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.chart-container',
        start: 'top 75%',
      }
    });
  });

  // Legend
  gsap.from('.chart-legend', {
    opacity: 0,
    duration: 0.6,
    delay: 1,
    scrollTrigger: {
      trigger: '.chart-container',
      start: 'top 75%',
    }
  });
}

// ============================================
// PROPERTY SLIDER — Vertical con GSAP
// Simula el efecto de la referencia con
// flechas arriba/abajo y transiciones suaves.
// ============================================
function initPropertySlider() {
  const slides = document.querySelectorAll('.property-slide');
  let current = 0;
  const total = slides.length;

  // Header reveal
  gsap.from('.featured .section-tag', {
    opacity: 0,
    y: 15,
    duration: 0.7,
    scrollTrigger: {
      trigger: '.featured',
      start: 'top 75%',
    }
  });

  gsap.from('.featured-title', {
    opacity: 0,
    y: 25,
    duration: 0.9,
    scrollTrigger: {
      trigger: '.featured',
      start: 'top 75%',
    }
  });

  // Property showcase reveal
  gsap.from('.featured-showcase', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.featured-showcase',
      start: 'top 80%',
    }
  });

  function goToProperty(index) {
    if (index === current) return;

    const dir = index > current ? 1 : -1;

    // Out
    gsap.to(slides[current], {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    });
    slides[current].classList.remove('active');

    current = ((index % total) + total) % total;

    // Reset image scale for new slide
    const newImg = slides[current].querySelector('img');
    gsap.set(newImg, { scale: 1 });
    gsap.to(newImg, { scale: 1.05, duration: 6, ease: 'power1.out' });

    // In — slide from direction
    slides[current].classList.add('active');
    gsap.fromTo(slides[current],
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: 'power2.out' }
    );

    // Animate overlay content
    const overlay = slides[current].querySelector('.property-overlay');
    gsap.from(overlay.querySelectorAll('.property-tag'), {
      x: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      delay: 0.3
    });

    gsap.from(overlay.querySelector('.property-name'), {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.4
    });

    gsap.from(overlay.querySelector('.property-actions'), {
      y: 15,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      delay: 0.55
    });
  }

  document.getElementById('propNext').addEventListener('click', () => goToProperty(current + 1));
  document.getElementById('propPrev').addEventListener('click', () => goToProperty(current - 1));
}

// ============================================
// WHY CARDS — Stagger reveal
// Los beneficios aparecen uno a uno para que
// el inversionista los procese individualmente.
// ============================================
function initWhyCards() {
  gsap.from('.why-header', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.why-invest',
      start: 'top 75%',
    }
  });

  gsap.utils.toArray('.why-card').forEach((card, i) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.why-grid',
        start: 'top 75%',
      }
    });
  });
}

// ============================================
// CTA — Text reveal simétrico al hero
// Cierra la narrativa con el mismo patrón
// visual que la abrió. El usuario reconoce
// el patrón = sensación de coherencia.
// ============================================
function initCTA() {
  document.querySelectorAll('.cta-line').forEach(line => {
    const text = line.innerHTML;
    line.innerHTML = `<span style="display:inline-block">${text}</span>`;
  });

  gsap.from('.cta-line span', {
    yPercent: 120,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 60%',
    }
  });

  gsap.from('.cta-desc', {
    opacity: 0,
    duration: 0.7,
    delay: 0.3,
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 60%',
    }
  });

  gsap.from('.cta-buttons', {
    opacity: 0,
    y: 20,
    duration: 0.7,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 60%',
    }
  });
}

// ============================================
// FOOTER
// ============================================
function initFooter() {
  gsap.from('.footer-top', {
    opacity: 0,
    y: 25,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 85%',
    }
  });
}

// ============================================
// MOBILE MENU
// ============================================
document.getElementById('hamburger')?.addEventListener('click', function() {
  this.classList.toggle('active');
});

// ============================================
// INIT
// ============================================
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(initLoader, 200);
});

window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});
