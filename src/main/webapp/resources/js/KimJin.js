

/*
const draggable = document.getElementById('draggable');
const droppable = document.getElementById('droppable');

draggable.addEventListener('dragstart', (event) => {
  // 드래그가 시작될 때 실행되는 이벤트 핸들러
  event.dataTransfer.setData('text/plain', event.target.id);
});

droppable.addEventListener('dragover', (event) => {
  // 드롭 영역 위에 드래그 중인 요소가 있을 때 실행되는 이벤트 핸들러
  event.preventDefault();
});

droppable.addEventListener('drop', (event) => {
  // 요소를 드롭했을 때 실행되는 이벤트 핸들러
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(data);
  droppable.appendChild(draggedElement);
});
*/

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

		setTimeout(() => {
			item.classList.add('active');
			item.style.opacity = '';
		}, 5)
		
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



