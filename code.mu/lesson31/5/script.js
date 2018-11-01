var getFIO = document.getElementById('input');
var push = document.querySelectorAll('.name');

getFIO.addEventListener('blur', f1);

function f1() {
    var str = getFIO.value;
    var mass = str.split(' ');
    for (var i = 0; i < mass.length; i++) {
        mass[i] = mass[i].split('');
        mass[i][0] = mass[i][0].toUpperCase();
        mass[i] = mass[i].join('');
        push[i].value = mass[i];
    }
}