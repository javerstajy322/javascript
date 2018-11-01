var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');

var mass = [input1, input2, input3];

var num = 1;
var j = 0;

window.setInterval(f1, 1000);

function f1() {
	mass[j].value = num;
	j++;
	num++;
	if (j >= mass.length) {
		j = 0;
	}
}