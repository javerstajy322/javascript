var paragraphList = document.querySelectorAll('.paragraph');
var button = document.querySelector('.btn');

button.addEventListener('click', f1);

function f1() {
	var max = 0;
	var j;
	for (var i = 0; i < paragraphList.length; i++) {
		if ( +paragraphList[i].innerHTML > max) {
			max = +paragraphList[i].innerHTML;
			j = i;
		}
	}
	paragraphList[j].style.backgroundColor = 'red';
}