var paragraphList = document.querySelectorAll('.paragraph');


for (var i = 0; i < paragraphList.length; i++) {
	paragraphList[i].addEventListener('click', f1);
}

function f1() {
	this.innerHTML = this.innerHTML * this.innerHTML
}