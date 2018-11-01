var inpList = document.querySelectorAll('#text');
var p = document.getElementById('paragraph');

function func() {
	for (var i = 0; inpList.length; i++) {
		if (inpList[i].checked) {
			p.innerHTML += ' ' + inpList[i].value;
		}
	}
}
