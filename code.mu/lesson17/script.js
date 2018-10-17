/* Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл */

// var mass = [1, 2, 3, 4, 5];
// var i = 0;

// function sss(mass) {
//     console.log(mass[i]);
//     i++;
//     if (i < mass.length) {
//         sss(mass);
//     }
// }

// console.log(sss(mass));

/*Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее) */
// pass
// var result = 0;
// var num = 123457;

// function sum(num) {
//     num = String(num).split('');
//     for (var i = 0; i < num.length; i++) {
//         result += +(num[i]);
//     }
//     console.log(result);
//     if (result > 9) {
//         num = result;
//         return sum(num);
//     } else {
//         return sum(result);
//     }
// }

// console.log(sum(179));

// var num = 123457;

// function sum(num) {
//     var arr = [];
//     var result = 0;

//     arr = String(num).split('');

//     for (var i = 0; i < arr.length; i++) {
//         result += +arr[i];
//     }

//     if (result > 9) {
//         num = result;
//         return sum(num);
//     } else {
//         return result;
//     }

// }


// console.log(sum(num));