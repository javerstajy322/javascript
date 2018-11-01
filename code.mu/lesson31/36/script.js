var button = document.getElementsByTagName('button');
for (var i = 0; i < button.length; i++) {
	button[i].addEventListener('click', func)
}

function func() {
	this.parentNode.style.display = 'none';
}