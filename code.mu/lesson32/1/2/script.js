var calc = document.getElementById('calc');
var button = document.querySelectorAll('.button');
var display = document.getElementById('display');
var str = '';

for (var i = 0; i < button.length; i++) {
	addEvent(button[i]);
}

function addEvent(button) {
	button.addEventListener('click', f1);
	
	function f1() {
		var type = button.getAttribute('data-type');
		if (type === '=') {
			str = eval(str);
			display.value = str;
			return;
		} else if (type === 'C') {
			str = '';
		} else {
			str += type;
		}
		display.value = str;
	}
}