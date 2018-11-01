function f1go() {
    window.setInterval(f1, 1000);
}

function f1() {
    var date = new Date();
    var paragraph = document.getElementById('test1');
    paragraph.innerHTML = zeroPr(date.getHours()) + ':' + zeroPr(date.getMinutes()) + ':' + zeroPr(date.getSeconds());
}

function zeroPr(num) {
    if (num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}