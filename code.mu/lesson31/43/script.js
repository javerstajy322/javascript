window.onload = function () {
	var elems = document.getElementsByTagName('td');
	for (var i = 0; i < elems.length; i++) {
		elems[i].addEventListener('click', function () {
			this.classList.add('active');
		});
	}
}



var buttonGo = document.querySelector('#go').addEventListener('click', function () {
	var activeElem = document.querySelectorAll('.active');
	var sum = 0;
	for (var i = 0; i < activeElem.length; i++) {
		sum += +activeElem[i].innerHTML;
	}
	var p = document.createElement('p');
	p.innerHTML = 'Cумма выбранных ячеек : ' + sum;
	document.body.appendChild(p);
});

var clear = document.querySelector('#clear').addEventListener('click', function () {
	var activeElem = document.querySelectorAll('.active');
	for (var i = 0; i < activeElem.length; i++) {
		activeElem[i].classList.remove('active');
	}
});

