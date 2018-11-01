var paragraphList = document.querySelectorAll('.paragraph');
var button = document.querySelector('.btn');
var input = document.querySelector('#num');
var colorMass = ['red', 'green', 'blue'];
var i = 0;

window.setInterval(f1, 1000);

function f1() {
	paragraphList[3].style.color = colorMass[i];
	i++;
	if (i >= colorMass.length) {
		i = 0;
	}
}