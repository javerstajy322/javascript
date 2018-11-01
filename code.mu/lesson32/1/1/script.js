var calc = document.getElementById('calc');
var display = document.getElementById('display');
var button = calc.getElementsByClassName('button');
str = '';

for (var i = 0; i < button.length; i++) {
	button[i].addEventListener('click', f1);
}

function f1() {
	var dataAttr = this.getAttribute('data-type');
	if (dataAttr === '=') {
		str = eval(str);
		display.value = str;
		return;
	} else if (dataAttr === 'C') {
		str = '';
		display.value = str;
	} else {
		str += dataAttr;
		display.value = str;
	}
}


