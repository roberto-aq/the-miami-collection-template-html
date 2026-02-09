/* ========================================
   DASHBOARD MOBILE — dash-mobile.js
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.getElementById('dashHamburger');
	const sidebar = document.querySelector('.dash-sidebar');
	if (!hamburger || !sidebar) return;

	// Create overlay backdrop in body
	const overlay = document.createElement('div');
	overlay.className = 'dash-sidebar-overlay';
	document.body.appendChild(overlay);

	const links = sidebar.querySelectorAll('.side-link');
	let isOpen = false;

	function openSidebar() {
		isOpen = true;
		hamburger.classList.add('is-active');
		sidebar.classList.add('is-open');
		overlay.classList.add('is-visible');
		document.body.style.overflow = 'hidden';

		// Reset links first, then animate in
		gsap.set(links, { x: -20, opacity: 0 });
		links.forEach((link, i) => {
			gsap.to(link, {
				x: 0,
				opacity: 1,
				duration: 0.4,
				delay: 0.15 + i * 0.05,
				ease: 'power3.out',
			});
		});
	}

	function closeSidebar() {
		isOpen = false;
		hamburger.classList.remove('is-active');
		document.body.style.overflow = '';

		gsap.to(links, {
			x: -10,
			opacity: 0,
			duration: 0.2,
			stagger: 0.02,
			ease: 'power2.in',
			onComplete: () => {
				sidebar.classList.remove('is-open');
				overlay.classList.remove('is-visible');
				// Clear inline styles so desktop view isn't broken
				gsap.set(links, { clearProps: 'all' });
			},
		});
	}

	hamburger.addEventListener('click', () => {
		isOpen ? closeSidebar() : openSidebar();
	});

	overlay.addEventListener('click', closeSidebar);

	sidebar.querySelectorAll('.side-link').forEach(link => {
		link.addEventListener('click', () => {
			if (window.innerWidth <= 1100) closeSidebar();
		});
	});

	document.addEventListener('keydown', e => {
		if (e.key === 'Escape' && isOpen) closeSidebar();
	});

	// Reset everything on resize to desktop
	window.addEventListener('resize', () => {
		if (window.innerWidth > 1100 && isOpen) {
			isOpen = false;
			hamburger.classList.remove('is-active');
			sidebar.classList.remove('is-open');
			overlay.classList.remove('is-visible');
			document.body.style.overflow = '';
			gsap.set(links, { clearProps: 'all' });
		}
	});
});
