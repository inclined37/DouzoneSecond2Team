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


