function f1() {
    var elem = document.getElementById('elem');
    elem.innerHTML = '!!!';
}

function f2() {
    var elem = document.getElementById('elem2');
    elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
}

function f3() {
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'Поменялся абзац';
    }
}

function f4() {
    var elements = document.getElementsByClassName('zzz');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i + 1;
    }
}

function f5() {
    var elements = document.querySelectorAll('p.www');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i + 1;
    }
}

function f6() {
    var elem = document.querySelector('.f6');
    elem.innerHTML = 'Ку-ку! а я <b>жирный</b>.';
}

function f7() {
    var elem = document.querySelector('.f7');
    elem.outerHTML = '<h3> Абзац превратился в h3! </h3>';
}

function f8() {
    var elem = document.querySelector('.f8');
    elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
}

function f9() {
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var result = document.getElementById('sum');
    result.innerHTML = +a.value + +b.value;
}

function f10() {
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'Поменялся.';
    }
}

function f11() {
    var elements = document.getElementsByClassName('xxx');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i;
    }
}

function f12() {
    var elements = document.querySelectorAll('p.zxc');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i;
    }
}

function f13() {
    var test = document.getElementById('test111');
    alert(test.getAttribute('class'));
}

function f14() {
    var elem = document.querySelector('.my-class2');
    alert(elem.getAttribute('class'));
}

function f15() {
    var elem = document.querySelector('.my-class2');
    elem.removeAttribute('class');
}

function f16() {
    var elem = document.getElementById('my-class3');
    alert(elem.getAttribute('class'));
}

function f17() {
    var elem = document.querySelector('.my-class3');
    elem.setAttribute('class', 'new-class');
    alert('Нажми на первую кнопку.');
}

function f18(elem1) {
    var elem2 = document.getElementById('p-input1');
    elem2.innerHTML = elem1.value;
}

function f19() {
    var elements = document.getElementsByTagName('a');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML += '(' + elements[i].href + ')';
    }
}

function f20(button) {
    var elem = document.getElementById('f20');
    elem.innerHTML = 'Текст изменился';
    elem.style.color = 'red';
    button.innerHTML = 'Текст кнопки тоже изменился';
    button.disabled = true;
}

function f21() {
    var elements = document.querySelectorAll('.f21 p');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i;
    }
}

function f22() {
    var elements = document.querySelectorAll('.f22 p');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i + '. ' + elements[i].innerHTML;
    }
}