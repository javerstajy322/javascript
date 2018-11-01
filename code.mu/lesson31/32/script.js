var checkbox = document.getElementById('text');
var input = document.getElementById('input1');

function func() {
	if (checkbox.checked) {
		input.style.display = 'none';
	} else {
		input.style.display = 'block';
	}

}