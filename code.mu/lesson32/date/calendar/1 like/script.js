var calendarEl = document.getElementById('calendar');
var dateEl = document.getElementById('date');
var btnPrev = document.getElementById('prev');
var btnNext = document.getElementById('next');
var MONTHS = [
	'Январь', 'Февраль', 'Март', 'Апрель',
	'Май', 'Июнь', 'Июль', 'Август',
	'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
var defMonth = 0;

create();
btnPrev.addEventListener('click', prev);
btnNext.addEventListener('click', next);

function prev() {
	defMonth--;
	create();
}

function next() {
	defMonth++;
	create();
}

function create() {
	var d = new Date();
	d.setMonth(d.getMonth() + defMonth); //увеличивает месяц d на 1 месяц.
	var year = d.getFullYear();
	var month = d.getMonth();
	var dayCount = (new Date(year, month + 1, 0).getDate());
	var today = null;
	if (defMonth === 0) {
		var today = d.getDate();
	}
	printDate(d);
	calendarConstruct(dayCount, today);
}

function calendarConstruct(dayCount, today) {
	var html = '';
	for (var i = 1; i <= dayCount; i++) {
		var cl = 'day';
		if (i === today) {
			cl += ' ' + 'today';
		}
		html += '<div class="' + cl + '">' + i + '</div>';
	}
	calendarEl.innerHTML = html;
}


function printDate(d) {
	dateEl.innerHTML = d.getFullYear() + ' ' + MONTHS[d.getMonth()];
}



















































// var calendar = document.getElementById('calendar');
// var dateEl = document.getElementById('date');
// var prevEl = document.getElementById('prev');
// var nextEl = document.getElementById('next');
// var deferentMonth = 0;
// var oneHour = 1000 * 60 * 60;
// var oneDay = oneHour * 24;
// var MONTHS = [
// 	'Январь', 'Февраль', 'Март', 'Апрель',
// 	'Май', 'Июнь', 'Июль', 'Август',
// 	'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
// ];
// create();
// prevEl.addEventListener('click', prev);
// nextEl.addEventListener('click', next);

// function prev() {
// 	deferentMonth--;
// 	create();
// }

// function next() {
// 	deferentMonth++;
// 	create();
// }

// function create() {
// 	var d = new Date();
// 	d.setMonth(d.getMonth() + deferentMonth);
// 	var year = d.getFullYear();
// 	var month = d.getMonth();
// 	var dayCount = (new Date(year, month + 1, 0)).getDate();
// 	var today = null;
// 	if (deferentMonth === 0) {
// 		var today = d.getDate();
// 	}
// 	printDate(d);
// 	generate(dayCount, today);
// }

// function generate(count, today) {
// 	var html = '';
// 	for (var i = 1; i <= count; i++) {
// 		var cl = 'day';
// 		if (i === today) {
// 			cl += ' today';
// 		}
// 		html += '<div class="' + cl + '">' + i + '</div>';
// 	}
// 	calendar.innerHTML = html;
// }

// function printDate(d) {
// 	dateEl.innerHTML = d.getFullYear() + ' ' +
// 		MONTHS[d.getMonth()];
// }