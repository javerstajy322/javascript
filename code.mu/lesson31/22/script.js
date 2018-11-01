var paragraphList = document.querySelectorAll('.paragraph');
var button = document.querySelector('.btn');
var input = document.querySelector('#num');

for (var i = 0 ; i < paragraphList.length; i++) {
	paragraphList[i].addEventListener('click', f1);
}

var count = 0;
function f1() {
	count++;
	input.value = count;
}