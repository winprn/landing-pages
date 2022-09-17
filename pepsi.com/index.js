const wavyTexts = document.querySelectorAll('.wavy-text');
const wavyTextSingles = document.querySelectorAll('.wavy-text-single');
const view = document.querySelector('.view');
const products = document.querySelector('.products');
const fadeIns = document.querySelectorAll('.fadeIn');
const observer = new IntersectionObserver(
	function (entries, observer) {
		console.log(entries);
		entries.forEach((entry) => {
			console.log(entry);
			if (entry.isIntersecting) {
				console.log(entry.target.classList);
				if (entry.target.classList?.contains('card')) {
					entry.target.classList.add('fade-in-up');
				} else {
					entry.target.childNodes.forEach((node) => {
						if (node.classList?.contains('left')) {
							node.classList.add('fade-in-left');
						} else if (node.classList?.contains('right')) {
							node.classList.add('fade-in-right');
						}
					});
				}
			}
		});
	},
	{
		threshold: 0.3,
	}
);

for (const wavy of wavyTexts) {
	const textContent = wavy.textContent.trim().toUpperCase();
	wavy.textContent = '';

	for (let i = 0; i < textContent.length; ++i) {
		const span = document.createElement('span');
		span.style.float = 'left';
		span.style.animationDelay = `${i * 8}ms`;
		if (textContent[i] === ' ') {
			span.innerHTML = '&nbsp;';
		} else {
			span.append(textContent[i]);
			span.appendChild(document.createElement('br'));
			span.appendChild(document.createElement('br'));
			span.append(textContent[i]);
			span.appendChild(document.createElement('br'));
		}

		wavy.appendChild(span);
	}
}

for (const wavy of wavyTextSingles) {
	const textContent = wavy.textContent.trim().toUpperCase();
	wavy.textContent = '';

	for (let i = 0; i < textContent.length; ++i) {
		const span = document.createElement('span');
		span.style.float = 'left';
		span.style.animationDelay = `${i * 8}ms`;
		if (textContent[i] === ' ') {
			span.innerHTML = '&nbsp;';
		} else {
			span.append(textContent[i]);
			span.appendChild(document.createElement('br'));
		}

		wavy.appendChild(span);
	}
}

view.addEventListener('click', () => {
	document.body.classList.toggle('active');
});

fadeIns.forEach((el) => observer.observe(el));

const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
	card.style.transitionDelay = `${(index + 1) * 100}ms`;
	observer.observe(card);
});
