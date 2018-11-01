var input = document.getElementById('num');
var result = document.getElementById('result');

input.addEventListener('blur', f1);

function f1() {
    var sum = 0;
    var sr;
	var str = input.value;
    var arr = str.split(',');
    for (var i = 0; i < arr.length; i++) {
        sum += +arr[i];
        sr = sum / arr.length;
    }
    result.innerHTML = sr;
}