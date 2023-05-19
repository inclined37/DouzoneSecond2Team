document.getElementById('fortune-button').addEventListener('click', showFortune);

function showFortune() {
  var fortunes = [
    "오늘은 행운이 함께할 것입니다.",
    "긍정적인 마음으로 진행하세요, 좋은 결과를 얻을 수 있습니다.",
    "즐거운 일이 생길 것입니다."
  ];

  var fortuneIndex = Math.floor(Math.random() * fortunes.length);
  var fortune = fortunes[fortuneIndex];

  document.getElementById('result').textContent = fortune;
  document.getElementById('result').style.display = 'block';
}    
        // 이미지 지도에 표시할 마커입니다
var marker = {
    position: new kakao.maps.LatLng( 37.579445, 126.9699761), 
    text: '서울특별시 종로구 창경궁로 254 7층' // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다
};

var staticMapContainer  = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
    staticMapOption = { 
        center: new kakao.maps.LatLng( 37.579445, 126.9699761), // 이미지 지도의 중심좌표
        level: 2, // 이미지 지도의 확대 레벨
        marker: marker // 이미지 지도에 표시할 마커
    };
    

// 이미지 지도를 생성합니다
var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);

marker.setDraggable(true); 