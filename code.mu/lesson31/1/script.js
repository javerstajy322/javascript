var sumElem = document.querySelectorAll('.inputList input');
var getSum = document.querySelector('#sum');
var button = document.querySelector('#button');

button.addEventListener('click', f1);

function f1() {
    var result = 0;
    for (var i = 0; i < sumElem.length; i++) {
        result += +sumElem[i].value;

    }
    getSum.value = result;
}
