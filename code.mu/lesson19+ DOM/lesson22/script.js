function f1() {
    timer = window.setInterval(f2, 1000);
}

function f2() {
    var paragraph = document.getElementById('test1');
    paragraph.innerHTML = parseInt(paragraph.innerHTML) + 1;
}

function f3() {
    timer = window.setInterval(f4, 1000);
}

function f4() {
    var paragraph = document.getElementById('test2');
    paragraph.innerHTML = parseInt(paragraph.innerHTML) + 1;
    var button1 = document.getElementById('button1');
    button1.disabled = true;
    var button2 = document.getElementById('button2');
    button2.disabled = false;
}

function f5() {
    window.clearInterval(timer);
    var button1 = document.getElementById('button1');
    button1.disabled = false;
    var button2 = document.getElementById('button2');
    button2.disabled = true;
}

// function go() {
//     window.timerId = window.setInterval(f6, 1000);
// }

// function f6() {
//     var clock = document.getElementById('clock');
//     var date = new Date();
//     clock.innerHTML = date.getHours() + date.getMinutes();
// }

function f7go() {
    window.setInterval(f7, 1000);
}

function f7() {
    var paragraph = document.getElementById('test3');
    if (+paragraph.innerHTML > 0) {
        paragraph.innerHTML = +paragraph.innerHTML - 1;
    } else if (+paragraph.innerHTML == 0) {
        var timetStop = document.getElementById('stop');
        timetStop.innerHTML = 'Обратный отсчет завершен.';
    }
}

function f8go() {
    timer = window.setInterval(f8, 1000);
    document.getElementById('go').disabled = true;
}

function f8() {
    var img1 = document.getElementById('img1'),
        img2 = document.getElementById('img2'),
        img3 = document.getElementById('img3'),
        tmp;
    tmp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = tmp;
}

function f9go() {
    timer = window.setInterval(f9, 1000);
    document.getElementById('f9go').disabled = true;
    document.getElementById('f9stop').disabled = false;
}

function f9stop() {
    window.clearInterval(timer);
    document.getElementById('f9go').disabled = false;
    document.getElementById('f9stop').disabled = true;
}

function f9() {
    var img1 = document.getElementById('f9img1'),
        img2 = document.getElementById('f9img2'),
        img3 = document.getElementById('f9img3'),
        img4 = document.getElementById('f9img4'),
        img5 = document.getElementById('f9img5'),
        img6 = document.getElementById('f9img6'),
        tmp;
    tmp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = img4.src;
    img4.src = img5.src;
    img5.src = img6.src;
    img6.src = tmp;
}


