var paragraphList = document.querySelectorAll('.paragraph');
var button = document.querySelector('.task');

button.addEventListener('click', f1);

function f1() {
    for (var i = 0; i < paragraphList.length; i++ ) {
        paragraphList[i].innerHTML += ' ' + (i + 1);
    }
    button.removeEventListener('click', f1);
}
