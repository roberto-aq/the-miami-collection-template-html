document.addEventListener('DOMContentLoaded', () => {
	// Page header reveal
	gsap.to('.dash-page-header', {
		opacity: 1,
		y: 0,
		duration: 0.7,
		ease: 'power3.out',
		delay: 0.2,
	});

	// Summary strip counters
	document.querySelectorAll('.summary-item').forEach((item, i) => {
		gsap.to(item, {
			opacity: 1,
			y: 0,
			duration: 0.6,
			delay: 0.3 + i * 0.08,
			ease: 'power3.out',
		});
		const strong = item.querySelector('[data-counter]');
		if (strong) {
			const target = parseInt(strong.dataset.counter);
			const counter = { val: 0 };
			gsap.to(counter, {
				val: target,
				duration: 1.5,
				delay: 0.5 + i * 0.08,
				ease: 'power2.out',
				onUpdate: () => {
					strong.textContent =
						'$' + Math.round(counter.val).toLocaleString();
				},
			});
		}
	});

	// Investment cards stagger
	document.querySelectorAll('.inv-card').forEach((card, i) => {
		gsap.to(card, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			delay: 0.4 + i * 0.15,
			ease: 'power3.out',
		});
	});

	// Progress bar fills
	document.querySelectorAll('.inv-progress-fill').forEach(bar => {
		gsap.to(bar, {
			width: bar.dataset.w + '%',
			duration: 1.2,
			delay: 0.8,
			ease: 'power2.out',
		});
	});

	// Transaction card
	gsap.to('.tx-card', {
		opacity: 1,
		y: 0,
		duration: 0.8,
		delay: 0.5,
		ease: 'power3.out',
	});
	gsap.from('.tx-row', {
		opacity: 0,
		x: -10,
		duration: 0.4,
		stagger: 0.05,
		delay: 0.8,
		ease: 'power2.out',
	});

	// Transaction filter
	const txFilter = document.getElementById('txFilter');
	if (txFilter) {
		txFilter.addEventListener('change', () => {
			const val = txFilter.value;
			document.querySelectorAll('.tx-row').forEach(row => {
				const match = val === 'all' || row.dataset.type === val;
				gsap.to(row, {
					opacity: match ? 1 : 0.15,
					height: match ? 'auto' : 0,
					duration: 0.3,
				});
			});
		});
	}

	// Document cards stagger
	document.querySelectorAll('.doc-card').forEach((card, i) => {
		gsap.to(card, {
			opacity: 1,
			x: 0,
			duration: 0.5,
			delay: 0.3 + i * 0.06,
			ease: 'power2.out',
		});
	});

	// Document category filter
	document.querySelectorAll('.doc-cat-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			document
				.querySelectorAll('.doc-cat-btn')
				.forEach(b => b.classList.remove('active'));
			btn.classList.add('active');
			const cat = btn.dataset.cat;
			document.querySelectorAll('.doc-card').forEach((card, i) => {
				const match = cat === 'all' || card.dataset.cat === cat;
				gsap.to(card, {
					opacity: match ? 1 : 0,
					height: match ? 'auto' : 0,
					padding: match ? '20px 24px' : '0 24px',
					duration: 0.35,
					delay: i * 0.03,
				});
			});
		});
	});

	// Config cards stagger
	document.querySelectorAll('.config-card').forEach((card, i) => {
		gsap.to(card, {
			opacity: 1,
			y: 0,
			duration: 0.7,
			delay: 0.3 + i * 0.12,
			ease: 'power3.out',
		});
	});

	// Config save feedback
	document.querySelectorAll('.config-save').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			const orig = btn.textContent;
			btn.textContent = '✓ Guardado';
			btn.style.background = '#3cb878';
			gsap.from(btn, {
				scale: 0.95,
				duration: 0.3,
				ease: 'back.out(2)',
			});
			setTimeout(() => {
				btn.textContent = orig;
				btn.style.background = '';
			}, 2000);
		});
	});
});
