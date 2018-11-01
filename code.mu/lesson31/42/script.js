var btn = document.querySelector('button');
var rows = document.getElementsByTagName('tr');
btn.addEventListener('click', func);

function func() {
	var arr = [];
	for (var i = 0; i < rows.length-1; i++) {
		for(var j = 0; j < rows[i].children.length; j++) {
			if (arr[j] == undefined) {
				arr[j] = 0;
			}
			arr[j] += Number(rows[i].children[j].innerHTML);
		}
	}
	for (var k = 0; k < rows[rows.length-1].children.length; k++) {
		rows[rows.length-1].children[k].innerHTML = arr[k];
	}
}