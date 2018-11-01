var paragraphList = document.querySelectorAll('.paragraph');
var button = document.querySelector('.btn');
var input = document.querySelector('#num');

function start1() {
	window.funcId = window.setInterval(f1, 500);
}

function f1() {
	if (+input.value > 0) {
		input.value = +input.value - 1;
	}
	if (+input.value == 0) {
		input.value = 0;
	}
}

function stop() {
	window.clearInterval(window.funcId);
}