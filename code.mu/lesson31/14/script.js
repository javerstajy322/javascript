var paragraphList = document.querySelectorAll('.paragraph');
var button = document.querySelector('.task');
var input = document.querySelector('#result');

button.addEventListener('click', f1);

function f1() {
    var mas = [];
    for (var i = 0; i < paragraphList.length; i++) {
        mas[i] = +paragraphList[i].innerHTML;
    }
    input.value = mas.sort(sortArr);
}

function sortArr(a, b) {
	if (a > b) {
		return -1;
	}
	if (a < b) {
		return -1;
 	}
	if (a == b) {
		return 0;
 	}
 }   