var paragraphList = document.querySelectorAll('.paragraph');
var button = document.querySelector('.btn');
var input = document.querySelector('#num');

window.setInterval(f1, 1000);

function f1() {
	for (var i = 0; i < paragraphList.length; i++) {
		if (paragraphList[i].style.color == 'red') {
			paragraphList[i].style.color = 'green';
		} else {
			paragraphList[i].style.color = 'red';
		}
	}
}