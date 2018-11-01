var pList = document.getElementsByTagName('p');


function go() {
	setInterval(clock, 1000);
	setInterval(toNight, 1000);	
}

function clock() {
	var date = new Date();
	var nowHour = date.getHours(2);
	var nowMin = date.getMinutes();
	var nowSec = date.getSeconds(); 
	pList[0].innerHTML =  isZero(nowHour) + ':' + isZero(nowMin) + ':' + isZero(nowSec); 
}

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
