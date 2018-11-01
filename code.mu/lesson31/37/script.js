var inp = document.getElementById('inp');
var btn = document.getElementById('button');
var list = document.getElementById('list');

btn.addEventListener('click', f1);

function f1() {
	var mas = inp.value.split(',');
	var item;
	for (var i = 0; i < mas.length; i++) {
		item = document.createElement('li');
		item.innerHTML = mas[i];
		list.appendChild(item);
	}
}