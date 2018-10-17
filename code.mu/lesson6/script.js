/*Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.*/

// var a = 10,
//     b = 3;
// console.log(a % b);

/* 
Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
*/

// var a = 11,
//     b = 3;

// if (!(a % b)) {
//     console.log('delitsa');
// } else {
//     console.log('Delitsa s ostatkom ' + (a % b));
// }

/* Возведите 2 в 10 степень. Результат запишите в переменную st. Показать решение.*/
// console.log(Math.pow(2,10));

/* Найдите квадратный корень из 245. */
// console.log(Math.sqrt(245));

/* Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for */

// var mass = [4, 2, 5, 19, 13, 0, 10],
//     result = 0;

// for (var i = 0; i < mass.length; i++) {
//     result += Math.pow(mass[i], 3);
// }
// console.log(Math.sqrt(result));

/*  Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. Показать решение. */

// console.log(Math.sqrt(379).toFixed(0));
// console.log(Math.sqrt(379).toFixed(1));
// console.log(Math.sqrt(379).toFixed(2));

/* Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'. */

// var sq = Math.sqrt(587);
// var obj = {'floor': Math.floor(sq), 'celi': Math.ceil(sq)}

// console.log(obj['floor']);
// console.log(obj['celi']);

/* Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. */

// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

/*Выведите на экран случайное целое число от 1 до 100*/
// console.log(Math.floor(Math.random() * (2 - 1 + 1)) + 1);

/* Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while) */

// var mass = [];

// for (var i = 0; i < 5; i++) {
//     mass[i] = Math.round(Math.random() * 10);
// }
// console.log(mass);

/*  Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b */

// var a = -1,
//     b = -3;

// console.log(Math.abs(a + b));

/* Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1. */

// var a = 3;
// var b = 5;
// var с = Math.abs(a-b);
// alert(с);

/* Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79 */

// var arr = [12, 15, 20, 25, 59, 79],
//     sum = 0;

// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// arifm = Math.round(sum / arr.length);
// console.log(arifm);

/* Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4. */

// var fact = 1;
// var num = 4;
// for (var i = 1; i <= num; i++) {
//     fact = fact * i;
// }
// alert(fact);