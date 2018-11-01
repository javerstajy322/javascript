var pList = document.getElementsByTagName('p');
var months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

function go() {
	setInterval(clock, 1000);
}

function clock() {
	var date = new Date();
	var nowHour = date.getHours(2);
	var nowMin = date.getMinutes();
	var nowSec = date.getSeconds();
	pList[0].innerHTML = isZero(nowHour) + ':' + isZero(nowMin) + ':' + isZero(nowSec);
}

var button = document.getElementById('btnToNight');
button.addEventListener('click', function() {
	var date = new Date();
	num = date.getMonth().valueOf();

	pList[1].innerHTML = months[num];
});



function isZero(num) {
	if (num <= 9 && num >= 1) {
		return num = '0' + num;
	} else {
		return num;
	}
}

function toNight() {
	var date = new Date();

}