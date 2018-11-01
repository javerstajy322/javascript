var inp = document.querySelector('input');
var parag = document.querySelector('p');
inp.addEventListener('keypress', func);

function func(event) {
	if (event.which == 13) {
	parag.innerHTML += inp.value + ',';
	inp.value = '';
	}
}