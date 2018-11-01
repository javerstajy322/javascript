var input = document.getElementById('num');
var paragraph = document.getElementById('result');



function f1() {
    var str = input.value;
    var mas = str.split('');
    for (var i = 0; i < mas.length; i++) {
        if (mas[i] == 3) {
            alert('Есть тройка');
            return;
        }
    }
    alert('Нет тройки');
    return;
}

