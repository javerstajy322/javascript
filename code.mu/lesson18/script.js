/* Выведите с помощью цикла столбец чисел от 1 до 100. */

// for (var i = 1; i <= 100; i++){
//     console.log(i);
// }

/* Выведите с помощью цикла столбец чисел от 100 до 1 */

// for (var i = 100; i > 0; i--){
//     console.log(i);
// }

/* Выведите с помощью цикла столбец четных чисел от 1 до 100 */

// for (var i = 1; i <= 100; i++) {
//     if (!(i % 2 )) {
//         console.log(i);
//     }
// }

/* Заполните массив 10-ю иксами с помощью цикла */
// var mass = [];

// for (var i = 0; i < 10; i++) {
//     mass.push('x');
// }
// console.log(mass);

/* Заполните массив числами от 1 до 10 с помощью цикла */

// var arr = [];
// for (var i = 1; i <= 10; i++) {
// 	arr.push(i);
// }
// console.log(arr);

/* Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части */
// var arr = [];
// for (var i = 0; i < 10; i++) {
// 	arr.push(Math.round(Math.random() * 10) + 1);
// }
// console.log(arr);   

/* Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. */

// var mass = [1, 2, 3, 4,11,15,16];

// for (var i = 0; i < mass.length; i++) {
//     if ((mass[i] > 0 ) && (mass[i] < 10)) {
//         console.log(mass[i]);
//     }
// }

/* Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите */

// var mass = [1,2,3,4,6,7];

// for (var i = 0; i < mass.length; i++) {
//     if (mass[i] == 5) {
//         console.log('Estb');
//         break;
//     } else {
//         console.log('none');
//         break;
//     }
// }

/* Дан массив с числами. С помощью цикла найдите сумму элементов этого массива */

// var mass = [1,2,3,5,6];
// var sum = 0; 
// for (var i = 0; i < mass.length; i++) {
//     sum += mass[i];
// }
// console.log(sum);

/*  Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. */

// var mass = [1,2,3,4,5];
// var sum = 0;
// for (var i = 0; i < mass.length; i++) {
//     sum += mass[i] * mass[i];
// }
// console.log(sum);

/* Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество). */

// var mass = [1, 2, 3, 4, 5];
// var sum = 0;
// for (var i = 0; i < mass.length; i++) {
//     sum += mass[i];
// }
// result = sum / mass.length;
// console.log(result);
