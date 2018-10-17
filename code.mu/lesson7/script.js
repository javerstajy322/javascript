/* Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены. */

// var str = 'aaa@bbb@ccc';
// console.log(str.replace(/@/g, '!')); //получим 'aaa!bbb@ccc'

/* Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice). */

// var str = 'aaa bbb ccc';
// console.log(str.substr(4, 3)); //substr(откуда отрезать, сколько отрезать)
// console.log(str.substring(4, 7)); //substring(откуда отрезать, докуда отрезать)
// console.log(str.slice(4, 7)); //slice(откуда отрезать, докуда отрезать)

/* В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'. */

// var str = '2025-12-31';
// var arr = str.split('-');
// var newStr = arr[2] + '/' + arr[1] + '/'+arr[0];
// console.log(newStr); //получим строку '31/12/2025'

/* Дана строка 'js'. Сделайте из нее строку 'JS' */

// var str = 'js';
// console.log(str.toUpperCase());

/*  Дана строка 'JS'. Сделайте из нее строку 'js' */

// var str = 'JS';
// console.log(str.toLowerCase());

/* Дана строка 'я учу javascript!'. Найдите количество символов в этой строке. */

// var str = 'я учу javascript!';
// console.log(str.length);

/*Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice)*/

// var str = 'я учу javascript!';

// console.log(str.substr(2, 3));
// console.log(str.substr(6, 10));

// console.log(str.substring(2, 5));
// console.log(str.substring(6, 16));

// console.log(str.slice(2, 5));
// console.log(str.slice(6, 16));

/*Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.*/

// var str = 'я учу javascript!';
// console.log(str.indexOf('учу'));

/* Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str */

// var str = 'lorem lrem lorem lorem',
//     n = 10;

// if (str.length > n) {
//     str = str.slice(0, n);
//     str += '...';
// }
// console.log(str);

/* Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены */

// var str = 'Я-учу-javascript!';
// console.log(str.replace(/-/g, '!'));

/* Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива. */

// var str = 'я учу javascript!';
// str = str.split(' ');
// console.log(str);

// /* Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива. */
// var str = 'я учу javascript!';
// str = str.split('');
// console.log(str);

/* В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'. */

// var date = '2025-12-31';

// date = date.split('-');
// console.log(date[2] + '.' + date[1] + '.' + date[0]);

/* Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!' */

// var mass = ['я', 'учу', 'javascript', '!'];

// mass = mass.join('+');
// console.log(mass);

/*Преобразуйте первую букву строки в верхний регистр.*/

// var str = 'я учу javascript!';
// var first = str.slice(0, 1).toUpperCase() + str.slice(1);
// console.log(first);

/*Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками */

// var str = 'var_test_text';
// var arr = str.split('_');
// for (var i = 1; i < arr.length; i++) { //цикл начнем с i = 1, а не i = 0
//     arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
// }
// var result = arr.join('');
// console.log(result);

