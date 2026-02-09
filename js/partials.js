/* ********************************** */
/*               FOOTER               */
/* ********************************** */
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
	const currentYear = new Date().getFullYear();
	currentYearElement.textContent = currentYear;
}

/* ********************************** */
/*                MENU                */
/* ********************************** */
/* ========================================
   MOBILE MENU — nav-mobile.js
   Overlay se inserta en <body>, NO en .navbar
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.nav-hamburger');
	const navbar = document.querySelector('.navbar');
	if (!hamburger || !navbar) return;

	const navLinks = navbar.querySelector('.nav-links');
	const navLogin = navbar.querySelector('.nav-login');
	if (!navLinks) return;

	// ---- Crear overlay directo en el body ----
	const overlay = document.createElement('div');
	overlay.className = 'nav-mobile';

	const mobileLinksWrap = document.createElement('div');
	mobileLinksWrap.className = 'nav-mobile-links';
	navLinks.querySelectorAll('a').forEach(link => {
		mobileLinksWrap.appendChild(link.cloneNode(true));
	});

	const mobileLoginWrap = document.createElement('div');
	mobileLoginWrap.className = 'nav-mobile-login';
	if (navLogin) {
		const loginClone = navLogin.cloneNode(true);
		loginClone.className = '';
		mobileLoginWrap.appendChild(loginClone);
	}

	overlay.appendChild(mobileLinksWrap);
	overlay.appendChild(mobileLoginWrap);

	// Insertar en body, NO dentro del navbar
	document.body.appendChild(overlay);

	const mobileLinks = overlay.querySelectorAll('.nav-mobile-links a');
	const mobileLogin = overlay.querySelector('.nav-mobile-login');
	let isOpen = false;

	function openMenu() {
		isOpen = true;
		hamburger.classList.add('is-active');
		overlay.classList.add('is-open');
		document.body.style.overflow = 'hidden';

		mobileLinks.forEach((link, i) => {
			gsap.fromTo(
				link,
				{ y: 30, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					delay: 0.1 + i * 0.06,
					ease: 'power3.out',
				}
			);
		});

		if (mobileLogin) {
			gsap.fromTo(
				mobileLogin,
				{ y: 20, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					delay: 0.1 + mobileLinks.length * 0.06,
					ease: 'power3.out',
				}
			);
		}
	}

	function closeMenu() {
		isOpen = false;
		hamburger.classList.remove('is-active');
		document.body.style.overflow = '';

		gsap.to([...mobileLinks, mobileLogin], {
			y: -15,
			opacity: 0,
			duration: 0.25,
			stagger: 0.02,
			ease: 'power2.in',
			onComplete: () => overlay.classList.remove('is-open'),
		});
	}

	hamburger.addEventListener('click', () => {
		isOpen ? closeMenu() : openMenu();
	});

	mobileLinks.forEach(link => {
		link.addEventListener('click', closeMenu);
	});

	document.addEventListener('keydown', e => {
		if (e.key === 'Escape' && isOpen) closeMenu();
	});
});
