var elem1 = document.querySelector('.div1');
elem1.onmousemove = func;

function func(event) {
    this.innerHTML = event.clientX + ':' + event.clientY;
}

