/* Задача. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'. */

// var a;
// function bull(a) {
// return a == 10 ? true : false;
// }
// console.log(bull(10));

/*Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).*/

// var min = 44;

// if (min < 15) {
//     console.log('pervaja');
// } else if (min < 30) {
//     console.log('vtoraja');
// } else if (min < 45) {
//     console.log('tretja');
// } else if (min < 60) {
//     console.log('4etvertaja');
// }

/*
Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.
*/

// var lang = 'ru';
// if (lang == 'ru') {
//     var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// }
// if (lang == 'en') {
//     arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// }
// alert(arr);

// var lang = 'ru';
// switch (lang) {
// 	case 'ru':
// 		var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// 	break;
// 	case 'en':
// 		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// 	break;
// }
// alert(arr);

// var lang = 'ru';
// var arr = {
// 	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
// 	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
// };
// alert(arr[lang]);

/* Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/

// function bull(a) {
//     if (a == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(bull(1));