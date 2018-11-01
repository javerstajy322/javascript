var pList = document.getElementsByTagName('p');
var button = document.getElementById('btnToNight');

var date = new Date();

// alert(date.getDate());

// alert(date.getMonth());

// alert(date.getFullYear());

// alert(date.getDay());

var weak = ['vosk', 'pn', 'vt', 'sr', 'chetv', 'ptn', 'sub'];
// var numberDay = date.getDay()
// alert(weak[numberDay]);

// var date2015 = new Date(2015, 0, 7);
// var getDay2015 = date2015.getDay();
// alert(weak[getDay2015]);

// var minute = Math.floor(date.getTime() / (1000 * 60));
// alert(minute);

var date = new Date();
var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 24, 0, 0);
var diff = Math.floor((midnight.getTime() - date.getTime()) / 1000);
var hours = Math.floor(diff / (60 * 60));
var minuts = Math.floor((diff - hours * 60 * 60) / 60);
// var seconds = Math.floor(diff - (hours * 60 * 60) - (minuts * 60));
var seconds = Math.floor(diff % 60);
alert(hours);
alert(minuts);
alert(seconds);