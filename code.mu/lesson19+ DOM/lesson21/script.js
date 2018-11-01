function f1() {
    var date = new Date();
    alert(date.getDay());
}

function f2() {
    var date = new Date();
    alert(date.getMonth());
}

function f3() {
    var date = new Date();
    alert(date.getFullYear());
}

function getZero(num) {
    if (num > 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

function f4() {
    var date = new Date();
    alert(getZero(date.getHours()) + ':' + getZero(date.getMinutes()) + ':' + getZero(date.getSeconds()) + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());
}

function f5() {
    var date = new Date();
    alert(date.getDay());
}

function f6(day) {
    var date = new Date();
    var day = date.getDay();
    date = ['voskr', 'пн', 'vt', 'sr', '4tv', 'ptn', 'sub'];
    alert(date[day]);
}

function f7() {
    var date = new Date(2015, 0, 7);
    var day = date.getDay();
    alert(day);
}

function f8() {
    var date = new Date();
    var minute = Math.floor(date.getTime() / (1000 * 60));
    alert(minute);
}

function f9() {
    var time = Date.parse('1988-03-01T00:00:00'); //заданный момент в timestamp

    var date = new Date();
    var now = date.getTime(); //текущий момент в timestamp

    var result = now - time; //найдем разницу в миллисекундах
    result = result / (1000 * 60 * 60); //переведем миллисекунды в часы
    alert(result);
}

function f10() {
    var date = new Date();
    var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    var result = Math.floor((date.getTime() - now.getTime()) / 1000);
    alert(result);
}