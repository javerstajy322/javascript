var inpList = document.getElementsByTagName('input');
var p = document.getElementById('paragraph');

for (var i = 0; i < inpList.length; i++) {
	inpList[i].addEventListener('change', f1);
}

function f1() {
	if (this.checked) {
		p.style.cssText = this.value;
	} else {
		p.style.cssText = 'none';
	}
}