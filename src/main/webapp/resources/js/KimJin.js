
//MAP
const appKey = '8db200d5070ab27ab9af5b77e23cad87';
const container = document.getElementById('map');
const longitude = 37.5665;
const latitude = 126.9780;

const options = {
	center: new kakao.maps.LatLng(longitude, latitude),
	lever: 3
};

const map = new kakao.maps.Map(container, options);

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