var getFIO = document.getElementById('input');
var push = document.querySelectorAll('.name');

getFIO.addEventListener('blur', f1);

function f1() {
    var str = getFIO.value;
    var mass = str.split(' ');
    for (var i = 0; i < mass.length; i++) {
        push[i].value = mass[i];
    }
    
}