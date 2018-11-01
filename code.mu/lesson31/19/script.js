var input = document.getElementById('num');

input.addEventListener('blur', f1) 

function f1() {
	var currentValue = this.value;
	if (currentValue >= 1 && currentValue <= 100) {
		this.style.borderColor = 'green';
	} else {
		this.style.borderColor = 'red';
	}
}