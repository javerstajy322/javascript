//Запускает таймер
function go() {
    window.timerId = window.setInterval(timer, 1000);
}

function timer() {
    var seconds = document.getElementById('seconds');
    var minutes = document.getElementById('minutes');
    var hours = document.getElementById('hours');
    var now = new Date();
    var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    var diff = Math.floor((midnight - now) / 1000); //разница в милисекундах, перевели в секунды
    var hoursRemain = Math.floor(diff / (60 * 60));
    var minutesRemain = Math.floor((diff - hoursRemain * 60 * 60) / 60);
    var secondsRemain = Math.floor(diff % 60);
    hours.innerHTML = hoursRemain;
    minutes.innerHTML = addZero(minutesRemain);
    seconds.innerHTML = addZero(secondsRemain);
}

function addZero(num) {
    if (num <= 9) return '0' + num;
    else return num;
}

