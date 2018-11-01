var paragraphList = document.querySelectorAll('.paragraph');
var button = document.querySelector('.btn');
var input = document.querySelector('#num');

for (var i = 0 ; i < paragraphList.length; i++) {
	paragraphList[i].addEventListener('click', f1);
}
function start() {
	window.setInterval(f2, 1000);
}

function f2() {
	input.value = input.value * input.value;
}