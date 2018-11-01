var input = document.getElementById('num');
var paragraph = document.getElementById('result');

input.addEventListener('blur', f1);

function f1() {
    var str = input.value;
    var mass1 = str.split('');
    var mass2 = str.split('').reverse();
    for (var i = 0; i < mass1.length; i++) {
        if (mass1[i] !== mass2[i]) {
            alert('Это не палиндром');
            return;
        }
    }
    alert('Это палиндром');
    return;
}
