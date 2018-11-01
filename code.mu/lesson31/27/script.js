var p = document.getElementById('text');
var a = document.getElementById('next');
var arr = ['один', 'два', 'три'];
var i = 0;
 
function start() {
	p.innerHTML = arr[i];
	i++;
  }

 function func() {
	p.innerHTML = arr[i];
	i++;
	if (i >= arr.length) {
		i = 0;
 	}
}   