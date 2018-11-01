var elem1 = document.querySelector('#elem1');
elem1.classList.add('www');
elem1.classList.remove('www');
alert(elem.classList.contains('www'));

function f1() {
    var elem2 = document.querySelector('#elem2');
    elem2.classList.toggle('www');
}

function f2() {
    var elem2 = document.querySelector('#elem2');
    alert(elem2.classList.length);
}

function f3() {
    var elem2 = document.querySelector('#elem2');
    for (var i = 0; i < elem2.classList.length; i++) {
        alert(elem2.classList[i]);
    }
}

function f4() {
    var elem3 = document.getElementById('elem3');
    elem3.style.cssText = 'color: red; font-size: 30px; border: solid 1px black;';
}

function f5() {
    var elem = document.getElementById('elem4');
    alert(elem.tagName);
    alert(elem.tagName.toLowerCase());
}

function f6() {
    var elem = document.getElementById('elem5');
    elem.innerHTML += ' ' + elem.tagName.toLowerCase();
}

function f7() {
    var ol = document.getElementById('ol');
    var li = document.createElement('li');
    li.innerHTML = 'пункт';
    ol.appendChild(li);
}

function f8() {
    var ul = document.getElementById('ul');
    var arr = [1, 2, 3];
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = arr[i];
        li.addEventListener('click', f9); //привяжем событие
        ul.appendChild(li);
    }
}

function f9() {
    alert(this.value);
}

function f10() {
    var ul2 = document.getElementById('ul2');
    var li = document.createElement('li');
    var test = document.querySelector('#elem6')
    li.innerHTML = '!!!';
    ul2.insertBefore(li, test);
}

function f11() {
    var elem = document.getElementById('elem7');
    elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');

}

var button1 = document.getElementById('button1');
button1.addEventListener('click', f12);

function f12() {
    var parent1 = document.getElementById('parent1');
    var child1 = document.getElementById('child1');
    parent1.removeChild(child1);

}

var mass = [1,2,3,4,5];
var ul3 = document.createElement('ul');

for (var i = 0; i < ul3.length; i++) {
    var li3 = document.createElement('li');
    li3.innerHTML = mass[i];
    ul3.appendChild(li3);
}
document.body.appendChild(ul3);
