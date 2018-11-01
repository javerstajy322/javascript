$(document).ready(function () {
    var defaultMonth = 0;
    var MONTH = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    create();

    $('#btnPrev').on('click', function () {
        defaultMonth--;
        create();
    });

    $('#btnNext').on('click', function () {
        defaultMonth++;
        create();
    });

    function create(event) {
        var date = new Date();
        date.setMonth(date.getMonth() + defaultMonth);
        var year = date.getFullYear();
        var month = date.getMonth();
        var dayCount = (new Date(year, month + 1, 0)).getDate();
        var today = null;
        if (defaultMonth === 0) {
            var today = date.getDate();
        }
        printDate(year, month);
        calendarConstruct(dayCount, today);
    }

    function printDate(year, month) {
        html = year + ' ' + MONTH[month];
        $('#getYM').html(html);
    }

    function calendarConstruct(dayCount, today) {

        //'<div id="dateItem" class="' + cl + '">' + i + '</div>'
        var html = '';
        for (var i = 1; i <= dayCount; i++) {
            var cl = 'day';
            if (i === today) {
                cl += ' ' + 'today';
            }
            html += '<div class="' + cl + '">' + i + '</div>';
        }
        $('#parentItem').html(html);
    }
});