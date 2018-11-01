var elems = document.getElementsByTagName('td');
var trigger = document.querySelector('button');
var inp = document.getElementById('inp');
trigger.addEventListener('click', func);
var max = '';
var n = 0;

function func() {
	var mas = [];
	for (var i = 0; i < elems.length; i++) {
		mas.push(+elems[i].innerHTML);
	}
	mas.sort(sortVozrst);
	var str = mas.join(', ');
	inp.value = str;
}

function sortVozrst(a,b) {
	if (a < b) {
		return -1;
	} 
	if (a > b) {
		return 1;
	}
	if (a == b) {
		return 0;
	}
}