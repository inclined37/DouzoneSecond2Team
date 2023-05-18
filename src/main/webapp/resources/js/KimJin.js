
//animation
let items = document.querySelectorAll('.clickoff');

items.forEach(item => {
	item.addEventListener('mouseenter', () => {
		item.classList.add('active');
	});
	item.addEventListener('mouseleave', () => {
		item.style.opacity = 0;

		item.classList.add('in-active');
		item.classList.remove('active');
		
		/*
		setTimeout(() => {
			item.classList.add('active');
			item.style.opacity = '';
		}, 1)*/
		
		
		item.addEventListener('animationend', () => {
			item.classList.remove('active', 'in-active');
			item.style.opacity = '';
			item.removeEventListener('animationend', onanimationend);
		});

	});
	item.addEventListener('click', () => {
		item.classList.remove('off');
		item.classList.add('on');
	})
});

function onanimationend() {
	this.classList.remove('active', 'in-active');
	this.style.opacity = '';
}

//리모컨
document.querySelectorAll('.remote-box a').forEach(link => {
	link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
	e.preventDefault();
	const targetId = this.getAttribute('href');
	const targetElement = document.querySelector(targetId);
	const targetOffset = targetElement.offsetTop;

	window.scrollTo({
		top: targetOffset,
		behavior: 'smooth'
	});
}



