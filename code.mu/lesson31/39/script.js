var divList = document.getElementsByTagName('div');
var btn = document.getElementById('btn');

btn.addEventListener('click',f1);

function f1() {
	for (var i = 0; i < divList.length; i++) {
		str = divList[i].innerHTML.slice(0, 10)+'...';
		divList[i].innerHTML = str;
	}
}