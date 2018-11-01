var inp = document.querySelector('#num');
document.documentElement.addEventListener('mouseup', func);
document.documentElement.addEventListener('keyup', func);

function func() {
	var content = window.getSelection().toString();
	inp.value = content;
}     