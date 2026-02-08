document.addEventListener('DOMContentLoaded', () => {

  // Form container reveal
  gsap.to('.auth-form-container', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });

  // Side text reveal
  gsap.from('.auth-side-text', { opacity: 0, x: -30, duration: 0.9, ease: 'power3.out', delay: 0.3 });
  gsap.from('.auth-side-stats > div', { opacity: 0, y: 15, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.6 });

  // Form fields stagger
  gsap.from('.form-group', { opacity: 0, y: 12, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.4 });

  // Toggle password visibility
  document.querySelectorAll('.toggle-pass').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.closest('.input-wrap').querySelector('input');
      input.type = input.type === 'password' ? 'text' : 'password';
    });
  });

  // Password strength indicator (register only)
  const passInput = document.getElementById('regPass');
  if (passInput) {
    const bars = document.querySelectorAll('.strength-bars span');
    const strengthText = document.querySelector('.strength-text');

    passInput.addEventListener('input', () => {
      const val = passInput.value;
      let score = 0;
      if (val.length >= 8) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      const levels = ['', 'Débil', 'Regular', 'Buena', 'Fuerte'];
      const classes = ['', 'active-weak', 'active-medium', 'active-strong', 'active-strong'];

      bars.forEach((bar, i) => {
        bar.className = '';
        if (i < score) bar.className = classes[score];
      });
      strengthText.textContent = val.length > 0 ? levels[score] : '';
    });
  }

  // Login form → redirect to dashboard
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = loginForm.querySelector('.auth-submit');
      const original = btn.textContent;
      btn.textContent = 'Verificando...';
      btn.style.opacity = '0.7';
      btn.style.pointerEvents = 'none';

      gsap.to('.auth-form-container', {
        opacity: 0, y: -15, duration: 0.4, delay: 0.8,
        onComplete: () => { window.location.href = 'dashboard.html'; }
      });
    });
  }

  // Register form → redirect to dashboard
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = registerForm.querySelector('.auth-submit');
      const original = btn.textContent;
      btn.textContent = 'Creando cuenta...';
      btn.style.opacity = '0.7';
      btn.style.pointerEvents = 'none';

      gsap.to('.auth-form-container', {
        opacity: 0, y: -15, duration: 0.4, delay: 1,
        onComplete: () => { window.location.href = 'dashboard.html'; }
      });
    });
  }
});
