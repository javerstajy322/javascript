var linkhList = document.querySelectorAll('.link');
var button = document.querySelector('.task');
var input = document.querySelector('#result');

button.addEventListener('click', f1);

function f1() {
	for (var i = 0; i < linkhList.length; i++) {
		linkhList[i].innerHTML += ' ' + linkhList[i].getAttribute('href');
	}
}