var input = document.getElementById('num');
var paragraph = document.getElementById('result');

input.addEventListener('blur', f1);

function f1() {
    var date = new Date(); 
    var insertYear = input.value;
    var yearNow = date.getFullYear();
    paragraph.innerHTML = yearNow - insertYear; 
}