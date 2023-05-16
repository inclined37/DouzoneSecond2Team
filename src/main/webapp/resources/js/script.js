    /*
    const miniNavBtn = document.getElementById('mini-nav-btn');
    const miniNavMenu = document.getElementById('mini-nav-menu');

    miniNavBtn.addEventListener('click', (event) => {
        event.preventDefault();
        miniNavMenu.classList.toggle('show');
    });
*/
	document.getElementById("videoAtag").addEventListener("click", function(){
		document.getElementById("musicAtag").setAttribute('class','nav-link');
		document.getElementById("videoAtag").setAttribute('class','nav-link active');
		document.getElementById("section2").setAttribute('class','off');
		document.getElementById("section3").setAttribute('class','on');
	});
	document.getElementById("musicAtag").addEventListener("click", function(){
		document.getElementById("videoAtag").setAttribute('class','nav-link');
		document.getElementById("musicAtag").setAttribute('class','nav-link active');
		document.getElementById("section3").setAttribute('class','off');
		document.getElementById("section2").setAttribute('class','on');
	});

    const audioPlayer = document.getElementById('audio-player');
    const audioSources = document.querySelectorAll('.playlist li');
    let currentSource = 0;

    audioPlayer.addEventListener('ended', () => {
        // 현재 재생 중인 오디오 파일이 끝나면, 다음 오디오 파일로 변경
        currentSource = (currentSource + 1) % audioSources.length;
        audioPlayer.src = audioSources[currentSource].dataset.src;
        audioPlayer.play();
    });

    // 재생 목록의 곡을 클릭하면 해당 곡을 재생
    audioSources.forEach((source, index) => {
        source.addEventListener('click', () => {
			console.log("***********");
            currentSource = index;
            audioPlayer.src = source.dataset.src;
            audioPlayer.play();
        });
    });

    // 첫 번째 오디오 파일을 재생
    audioPlayer.src = audioSources[currentSource].dataset.src;

    // 첫 번째 오디오 파일을 재생
    audioPlayer.play();

    function updateSongInfo(index) {
        const songInfo = document.getElementById('song-info');
        const albumArt = document.getElementById('album-art');
        songInfo.textContent = audioSources[index].dataset.info;
        albumArt.src = audioSources[index].dataset.image || ''; // 이미지 URL을 data-image 속성으로 지정하거나 기본값으로 비워 둡니다.
    }

    // 재생 목록의 곡을 클릭하면 해당 곡을 재생
    audioSources.forEach((source, index) => {
        source.addEventListener('click', () => {
            currentSource = index;
            audioPlayer.src = source.dataset.src;
            audioPlayer.play();
            updateSongInfo(index);
        });
    });

    // 첫 번째 오디오 파일을 재생
    audioPlayer.src = audioSources[currentSource].dataset.src;
    audioPlayer.play();
    updateSongInfo(currentSource);


const jangImg = document.getElementById('jang');
const originJangSrc = '/resources/img/bin.jpg';
const hoverJangSrc = '/resources/img/binHeart.jpg';

jangImg.addEventListener('mouseover',function(){
   jangImg.src= hoverJangSrc; 
});

jangImg.addEventListener('mouseout',function(){
   jangImg.src= originJangSrc; 
});

const leeImg = document.getElementById('lee');
const originLeeSrc = '/resources/img/join.jpg';
const hoverLeeSrc = '/resources/img/joinHeart.jpg';

leeImg.addEventListener('mouseover',function(){
   leeImg.src= hoverLeeSrc; 
});

leeImg.addEventListener('mouseout',function(){
   leeImg.src= originLeeSrc;
});

const kimJinImg = document.getElementById('kimJin');
const originkimJinSrc = '/resources/img/gain.jpg';
const hoverkimJinSrc = '/resources/img/gainHeart.jpg';

kimJinImg.addEventListener('mouseover',function(){
   kimJinImg.src= hoverkimJinSrc; 
});

kimJinImg.addEventListener('mouseout',function(){
   kimJinImg.src= originkimJinSrc;
});

const aleumImg = document.getElementById('aleum');
const originaleumSrc = '/resources/img/hanye.jpg';
const hoveraleumSrc = '/resources/img/hanyeHeart.jpg';

aleumImg.addEventListener('mouseover',function(){
   aleumImg.src= hoveraleumSrc; 
});

aleumImg.addEventListener('mouseout',function(){
   aleumImg.src= originaleumSrc;
});



function togglevideo(index) {
  const videos = document.querySelectorAll('.videos');
  const videodetails = document.querySelectorAll('#section3 .video-detail > div');
  const selectedbtns = document.querySelectorAll('#section3 .button-list > a');
  videos.forEach((video, i) => {
    if (i === index) {
      video.classList.add('on');
      video.classList.remove('off');
    } else {
      video.classList.remove('on');
      video.classList.add('off');
    }
  });
  videodetails.forEach((vd, i) => {
    if (i === index) {
      vd.classList.add('on');
      vd.classList.remove('off');
    } else {
      vd.classList.remove('on');
      vd.classList.add('off');
    }
  });
  selectedbtns.forEach((selectedbtn, i) => {
    if (i === index) {
      selectedbtn.classList.add('on');
      selectedbtn.classList.remove('off');
    } else {
      selectedbtn.classList.remove('on');
      selectedbtn.classList.add('off');
    }
  });
}

//캡쳐 버튼 클릭 이벤트
document.getElementsByClassName('capture').addEventListener("click", function() {
	let getIframe = document.get
})



