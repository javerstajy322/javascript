function func1() {
	alert('Привет');
}

function func2() {
	var input = document.getElementById('input');
	alert(input.value);
}
function func3() {
	var input = document.getElementById('input1');
	var number = Number(input.value);
	var square = number*number;
	alert(square);
}

function func4() {
    var elem1 = document.getElementById('input2');
    var elem2 = document.getElementById('input3');
    var a, b;
    a = elem1.value;
    b = elem2.value;
    elem1.value = b;
    elem2.value = a;
}

function func5(elem) {
	elem.value = 'Новый текст кнопки';
}

function func6() {
    var elem = document.getElementById('input4');
    elem.style.color = 'red';
}

function func7() {
    var elem = document.getElementById('input5');
    elem.disabled = true;
}
function func8() {
    var elem = document.getElementById('input5');
    elem.disabled = false;
}

/* zadachi */

function func9(elem) {
    var elem = document.getElementById('input6');
    alert(elem.value);
}

function func10() {
    var elem = document.getElementById('input7');
    elem.value = 'Новый value';
}

function func11() {
    var elem = document.getElementById('img');
    elem.src = 'img/2.png';
}

function func12(elem) {
    alert(elem.value);
}

function func13(elem) {
    elem.value = 'поменял текст';
}

function func14(elem) {
    elem.value = 'еще раз поменял';
}

function func15(elem) {
    elem.value = 'ky-ky';
}

function func16(elem) {
    elem.value = 'теперь кнопка не активна';
    elem.disabled = true;
}

function func17(elem) {
    elem.src = 'img/2.png';
}

function func18(elem) {
    elem.src = 'img/1.png';
}

function func19(elem) {
    var elem = document.getElementById('input12');
    elem.style.color = 'red';
    elem.style.width = '300px';
}

function func20() {
    var elem = document.getElementById('input13');
    elem.style.display = 'none';
}

function func21() {
    var elem = document.getElementById('input13');
    elem.style.display = 'block';
}

function func22() {
    var elem = document.getElementById('input14');
    elem.value = 'Поменял value и css';
    elem.style.color = 'red';
    elem.style.borderRadius = '15px';
    elem.style.padding = '15px';
}

function func23(elem) {
    elem.disabled = true;
    elem.value = 'Теперь не нажать';
    var elem2 = document.getElementById('input17');
    elem2.style.display = 'block';
}

function func24(elem2) {
    var elem = document.getElementById('input16');
    elem.disabled = false;
    elem.value = 'Какой-то текст';
    elem2.style.display = 'none';
}

function func25(elem) {
    ++elem.value;
}

function func26() {
    var elem = document.getElementById('input19');
    elem.style.cssFloat = 'right';
}

function func27() {
    var elem = document.getElementById('input20');
    elem.value = 'Мои css классы: ' + elem.className;
}

function func28() {
    var elem1 = document.getElementById('input21');
    var elem2 = document.getElementById('input22');
    var a, b;
    a = elem1.value;
    b = elem2.value;
    elem1.value = b;
    elem2.value = a;
}

function func29() {
    var elem1 = document.getElementById('input23');
    var elem2 = document.getElementById('input24');
    var result; 
    result = elem1.value * elem1.value;
    elem2.value = result;
}

function func30 (elem) {
    elem.style.cursor = 'not-allowed';
}

function func31addText(text) {
    var elem = document.getElementById('input26');
    elem.value += text;
}

function func31Sum() {
    var elem = document.getElementById('input26');
    console.log(Number(elem.value));
}