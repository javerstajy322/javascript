var inp = document.getElementById('inp');
var liList = document.getElementsByTagName('li');

inp.addEventListener('blur', f1); 

function f1() {
	n = +inp.value;
	liList[n - 1].style.color = 'red';
}