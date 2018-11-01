var country = document.querySelectorAll('p');
for(var i = 0; i < country.length; i++) {
	country[i].addEventListener('click', show);
}

function show() {
	this.nextElementSibling.style.display = 'block';
	this.removeEventListener('click', show);
	this.addEventListener('click', hide);
}

function hide(){
	this.nextElementSibling.style.display = 'none';
	this.removeEventListener('click', hide);
	this.addEventListener('click', show);
}