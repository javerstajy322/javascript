var input = document.getElementById('num');
var paragraph = document.getElementById('result');

input.addEventListener('blur', f1);

function f1() {
    
    var str = input.value;
    var mas = str.split('.');
    var mas2 = mas.reverse();
    var str2 = mas2.join('.');
    var dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    var date = new Date(str2);
    var day = date.getDay();
    paragraph.innerHTML = dayWeak[day];
}

// function f1() {
//     var date = new Date();
//     var dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     var str = input.value;
//     var arr = str.split('.');
//     var arr2 = arr.reverse();
//     var str1 = arr2.join('.');
//     var date = new Date(str1);
//     var day = date.getDay();
//     paragraph.innerHTML = dayWeak[day];
// }