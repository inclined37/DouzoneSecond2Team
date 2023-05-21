var isShaking = false;

function startShake() {
  if (!isShaking) {
    document.querySelector(".box").classList.add("shake");
    isShaking = true;
  }
}

function stopShake() {
  if (isShaking) {
    document.querySelector(".box").classList.remove("shake");
    isShaking = false;
  }
}


document.getElementById('fortune-button').addEventListener('click', showFortune);

  
function showFortune() {
  // section2로 이동
  window.location.href = "#section2";
} 


var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = { 
        center: new kakao.maps.LatLng( 37.583782851238425, 126.99998018715789), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    }; 

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 커스텀 오버레이에 표시할 내용입니다     
// HTML 문자열 또는 Dom Element 입니다 
var content = '<div class ="label"><span class="left"></span><span class="center">KOSA 혜화교육센터</span><span class="right"></span></div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng( 37.583782851238425, 126.99998018715789);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content   
});

// 커스텀 오버레이를 지도에 표시합니다
customOverlay.setMap(map);

