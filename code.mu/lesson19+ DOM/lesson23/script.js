var imgList = document.getElementsByTagName('img');
for (var i = 0; i<imgList.length; i++) {
    imgList[i].addEventListener('click', f1);
}

function f1() {
    alert(this.src);
}

var linkList = document.getElementsByTagName('a');
for (var i = 0; i < linkList.length; i++) {
    linkList[i].addEventListener('mouseover', f2);
}

function f2() {
    this.title = this.innerHTML;
}

var linkList2 = document.querySelectorAll('.test2 a');
for (var i = 0; i < linkList2.length; i++) {
    linkList2[i].addEventListener('mouseover', f3);
}

function f3() {
    this.innerHTML += '(' + this.href + ')';
    this.removeEventListener('mouseover', f3);
}

var inputList1 = document.querySelectorAll('#test3');
var paragraph = document.getElementById('test4');
for (var i = 0; i < inputList1.length; i++) {
    inputList1[i].addEventListener('blur', f4);
}

function f4() {
    paragraph.innerHTML += this.value;
    this.removeEventListener('blur',f4);
}

var inputList2 = document.querySelectorAll('.test4');
for (var i = 0; i < inputList2.length; i++) {
    inputList2[i].addEventListener('click', f5);
}

function f5() {
    alert(this.value);
    this.removeEventListener('click', f5);
}

var paragraphList1 = document.querySelectorAll('.test5');
for (var i = 0; i < paragraphList1.length; i++) {
    paragraphList1[i].addEventListener('click', f6);
}

function f6() {
    this.innerHTML = +this.innerHTML * +this.innerHTML;
}

var inputList3 = document.querySelectorAll('.test6');
for (var i = 0; i < inputList3.length; i++) {
    inputList3[i].addEventListener('blur', f7);
}

function f7() {
    var correctLength = this.dataset.length; // соответствующее
    var inpudDataLenght = this.value.length; //в инпуте
    if (inpudDataLenght == correctLength) {
        this.style.borderColor = 'green'
    } else {
        this.style.borderColor = 'red';
    }
}

var divList1 = document.querySelectorAll('.toggle');
for (var i = 0; i < divList1.length; i++) {
    divList1[i].addEventListener('click', f8);
}

function f8() {
    this.style.backgroundColor = 'red';
    this.removeEventListener('click', f8);
    this.addEventListener('click', f9);
}
function f9() {
    this.style.backgroundColor = 'green';
    this.addEventListener('click', f8);
    this.removeEventListener('click', f9);
}

