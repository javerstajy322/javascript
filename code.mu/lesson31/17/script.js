var imgList = document.getElementsByTagName('img');

for (var i = 0; i < imgList.length; i++) {
	imgList[i].addEventListener('click', f1);
}

function f1() {
	this.height = this.height * 2;
	this.removeEventListener('click', f1);
	this.addEventListener('click', f2);
}

function f2() {
	this.height = this.height / 2;
	this.addEventListener('click', f1);
	this.removeEventListener('click', f2);
}