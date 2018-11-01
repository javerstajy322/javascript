var calc = document.querySelector('.calc');
var button = calc.querySelectorAll('.btn');
var display = document.getElementById('display');
var clear = document.querySelector('.clc');
var str = '';


for (var i = 0; i < button.length; i++) {
	addEvent(button[i]);
}

function addEvent(button) {
	button.addEventListener('click', f1);

	function f1() {
		btnValue = button.innerHTML;

		if (btnValue === '=') {
			str = eval(str);
			display.value = str;
		} else if (btnValue === 'clc') {
			str = '';
		} else {
			str += btnValue;
		}
		display.value = str;
	}
}