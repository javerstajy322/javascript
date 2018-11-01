var input = document.getElementById('num');
var paragraph = document.getElementById('result');

input.addEventListener('blur', f1);

function f1() {
    var arr2 = [];
    var str = input.value;
    var arr = str.split('.');
    arr2 = arr.reverse();
    var str1 = arr2.join('-');
    paragraph.innerHTML = str1;
}