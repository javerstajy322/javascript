/*  Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.  */

// var str = 'hello';
// str = str[0].toUpperCase() + str.substr(1);
// console.log(str);

// var str = 'hello';
// str = str.split('');
// str[0] = str[0].toUpperCase();
// var result = str.join('');
// console.log(result);

/* Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл */

// var str = '123456';

// str = str.split("").reverse().join("");

// console.log(str);

/* Дано число, например, 3751. Отсортируйте цифры в нем (сделайте из него 1357) не используя цикл. */

var str = '3751';
arr = str.split('');
arr.sort();
var result = arr.join('');
console.log(result);

/*Проверьте, что строка начинается на http://. */

// var str = 'http://phphtml';
// if (str.substr(0, 7) == 'http://') {
//     alert('Да');
// } else {
//     alert('Нет');
// }

/* Проверьте, что строка заканчивается на .html. */

// var str = 'index.html';
// if (str.substr(-5) == '.html') {
//     alert('Да');
// } else {
//     alert('Нет');
// }