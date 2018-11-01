var input = document.getElementById('num');
var result = document.getElementById('result');

input.addEventListener('blur', f1);

function f1() {
    var max = 0;

    var arr2 = [];
    var str = input.value;
    var mass = str.split(' ');
    // for (var i = 0; i < mass.length; i++) {
    //     mass[i] = mass[i].split('');
    //     if (mass[i].length > max) {
    //         max = mass[i];
    //     }
    //     for (var j = 0; j < mass[i].length; j++) {
    //         sum += 1;
    //     }
    // }
    // result.innerHTML = sum;

for (var i = 0; i < mass.length; i++) {
    var num = 0;
    arr2 = mass[i].split('');
    if (arr2.length > max) {
        max = arr2.length
    }
}
result.innerHTML = max;
}