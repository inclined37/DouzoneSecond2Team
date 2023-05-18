/*
let data = {
	"response": {
		"result": [
			{
				"cnt7": "26147",
				"cnt8": "19188",
				"cnt5": "7178",
				"cnt6": "23680",
				"cnt3": "19352",
				"cnt4": "17403",
				"cnt1": "20571",
				"cnt2": "19989",
				"mmddhh": "5.17.00시",
				"mmdd3": "05.13",
				"rate4": "33.70",
				"mmdd2": "05.12",
				"rate5": "13.90",
				"mmdd1": "05.11",
				"rate6": "45.86",
				"rate7": "50.63",
				"mmdd7": "05.17",
				"rate1": "39.84",
				"mmdd6": "05.16",
				"rate2": "38.71",
				"mmdd5": "05.15",
				"rate3": "37.48",
				"mmdd4": "05.14",
				"mmdd8": "주간일평균",
				"rate8": "37.16"
			}
		],
		"resultCnt": "1",
		"resultCode": "1",
		"resultMsg": "조회성공"
	}
};


let mmdd1 = data.response.result[0].mmdd1;     // 일자_1: 5월 11일
let cnt1 = data.response.result[0].cnt1;       // 일일발생현황_1: 20571
let rate1 = data.response.result[0].rate1;     // 인구 10만명당 발생현황 _1: 39.84

let mmdd2 = data.response.result[0].mmdd2;     // 일자_2: 5월 12일
let cnt2 = data.response.result[0].cnt2;       // 일일발생현황_2: 19989
let rate2 = data.response.result[0].rate2;     // 인구 10만명당 발생현황 _2: 38.71

let mmdd3 = data.response.result[0].mmdd3;     // 일자_3: 5월 13일
let cnt3 = data.response.result[0].cnt3;       // 일일발생현황_3: 19352
let rate3 = data.response.result[0].rate3;     // 인구 10만명당 발생현황 _3: 37.48

let mmdd4 = data.response.result[0].mmdd4;     // 일자_4: 5월 14일
let cnt4 = data.response.result[0].cnt4;       // 일일발생현황_4: 17403
let rate4 = data.response.result[0].rate4;     // 인구 10만명당 발생현황 _4: 33.70

let mmdd5 = data.response.result[0].mmdd5;     // 일자_5: 5월 15일
let cnt5 = data.response.result[0].cnt5;       // 일일발생현황_5: 7178
let rate5 = data.response.result[0].rate5;     // 인구 10만명당 발생현황 _5: 13.90

let mmdd6 = data.response.result[0].mmdd6;     // 일자_6: 5월 16일
let cnt6 = data.response.result[0].cnt6;       // 일일발생현황_6: 23680
let rate6 = data.response.result[0].rate6;     // 인구 10만명당 발생현황 _6: 45.86

let mmdd7 = data.response.result[0].mmdd7;     // 일자_7: 5월 17일
let cnt7 = data.response.result[0].cnt7;       // 일일발생현황_7: 26147
let rate7 = data.response.result[0].rate7;     // 인구 10만명당 발생현황 _7: 50.63

let mmdd8 = data.response.result[0].mmdd8;     // 일자_8: 주간일평균
let cnt8 = data.response.result[0].cnt8;       // 일일발생현황_8:
*/

let element = document.getElementById('mmdd1');
element.innerText = mmdd1;

let element2 = document.getElementById('mmdd2');
element2.innerText = mmdd2;

let element3 = document.getElementById('mmdd3');
element3.innerText = mmdd3;

let element4 = document.getElementById('mmdd4');
element4.innerText = mmdd4;

let element5 = document.getElementById('mmdd5');
element5.innerText = mmdd5;

let element6 = document.getElementById('mmdd6');
element6.innerText = mmdd6;

let element7 = document.getElementById('mmdd7');
element7.innerText = mmdd7;



	// cnt1 값 계산
    let percentValue1 = (cnt1 / 50000000) * 100000; // 퍼센트 값 계산

    // 진행 막대 업데이트
    let progressBar1 = document.getElementById("percent1");
    progressBar1.style.width = percentValue1 + "%"; // 진행 막대의 너비 설정
    progressBar1.setAttribute("aria-valuenow", percentValue1); // 진행 상태 값 설정
    
    // cnt2 값 계산
    let percentValue2 = (cnt2 / 50000000) * 100000; // 퍼센트 값 계산

    // 진행 막대 업데이트
    let progressBar2 = document.getElementById("percent2");
    progressBar2.style.width = percentValue2 + "%"; // 진행 막대의 너비 설정
    progressBar2.setAttribute("aria-valuenow", percentValue2); // 진행 상태 값 설정
    
    // cnt3 값 계산
    let percentValue3 = (cnt3 / 50000000) * 100000; // 퍼센트 값 계산

    // 진행 막대 업데이트
    let progressBar3 = document.getElementById("percent3");
    progressBar3.style.width = percentValue3 + "%"; // 진행 막대의 너비 설정
    progressBar3.setAttribute("aria-valuenow", percentValue3); // 진행 상태 값 설정
    
    // cnt4 값 계산
    let percentValue4 = (cnt4 / 50000000) * 100000; // 퍼센트 값 계산

    // 진행 막대 업데이트
    let progressBar4 = document.getElementById("percent4");
    progressBar4.style.width = percentValue4 + "%"; // 진행 막대의 너비 설정
    progressBar4.setAttribute("aria-valuenow", percentValue4); // 진행 상태 값 설정
    
    // cnt5 값 계산
    let percentValue5 = (cnt5 / 50000000) * 100000; // 퍼센트 값 계산

    // 진행 막대 업데이트
    let progressBar5 = document.getElementById("percent5");
    progressBar5.style.width = percentValue5 + "%"; // 진행 막대의 너비 설정
    progressBar5.setAttribute("aria-valuenow", percentValue5); // 진행 상태 값 설정
    
    // cnt6 값 계산
    let percentValue6 = (cnt6 / 50000000) * 100000; // 퍼센트 값 계산

    // 진행 막대 업데이트
    let progressBar6 = document.getElementById("percent6");
    progressBar6.style.width = percentValue6 + "%"; // 진행 막대의 너비 설정
    progressBar6.setAttribute("aria-valuenow", percentValue6); // 진행 상태 값 설정
    
    // cnt7 값 계산
    let percentValue7 = (cnt7 / 50000000) * 100000; // 퍼센트 값 계산

    // 진행 막대 업데이트
    let progressBar7 = document.getElementById("percent7");
    progressBar7.style.width = percentValue7 + "%"; // 진행 막대의 너비 설정
    progressBar7.setAttribute("aria-valuenow", percentValue7); // 진행 상태 값 설정
    

    // 텍스트 업데이트
    let spanElement = document.getElementById("span1");
    spanElement.textContent = parseInt(percentValue1/10)+"%"; // 텍스트 값 설정
    
    // 텍스트 업데이트
    let spanElement2 = document.getElementById("span2");
    spanElement2.textContent = parseInt(percentValue2/10)+"%"; // 텍스트 값 설정
    
    // 텍스트 업데이트
    let spanElement3 = document.getElementById("span3");
    spanElement3.textContent = parseInt(percentValue3/10)+"%"; // 텍스트 값 설정
    
    // 텍스트 업데이트
    let spanElement4 = document.getElementById("span4");
    spanElement4.textContent = parseInt(percentValue4/10)+"%"; // 텍스트 값 설정
    
    // 텍스트 업데이트
    let spanElement5 = document.getElementById("span5");
    spanElement5.textContent = parseInt(percentValue5/10)+"%"; // 텍스트 값 설정
    
    // 텍스트 업데이트
    let spanElement6 = document.getElementById("span6");
    spanElement6.textContent = parseInt(percentValue6/10)+"%"; // 텍스트 값 설정
    
    // 텍스트 업데이트
    let spanElement7 = document.getElementById("span7");
    spanElement7.textContent = parseInt(percentValue7/10)+"%"; // 텍스트 값 설정
    
    
    
    document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("myPieChart").getContext("2d");

    // 7일치 데이터
    var data = [cnt1, cnt2, cnt3, cnt4, cnt5, cnt6, cnt7];

    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [mmdd1+": "+cnt1+"명",mmdd2+": "+cnt2+"명", mmdd3+": "+cnt3+"명", mmdd4+": "+cnt4+"명", mmdd5+": "+cnt5+"명",mmdd6+": "+cnt6+"명",mmdd7+": "+cnt7+"명"],
            datasets: [{
                data: data,
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#32a852", "#800080", "#FF4500", "#808080"]
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    font: {
                        weight: 'bold'
                    }
                }
            }
        }
    });

    // 차트 크기 설정
    myPieChart.canvas.parentNode.style.width = "400px";
    myPieChart.canvas.parentNode.style.height = "400px";
});
    