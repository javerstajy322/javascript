var input = document.getElementById('num');
var operand = document.querySelectorAll('.cls');

for (var i = 0; i < operand.length; i++) {
	operand[i].addEventListener('click', f1);
}

function f1() {
	var number = +input.value + +this.value;
	if (number > 0) {
		input.value = number;
	} 
	if (number == 0) {
		input.value = 0;
	}
	return number;
}	
