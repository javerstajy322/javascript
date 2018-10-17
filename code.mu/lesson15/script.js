/* Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное. */
// var arr = [1, 2, 3, -1, -2, -3];

// function isPositive(num) {
// 	if (num >=0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// var newArr = [];
// for (var i = 0; i <= arr.length; i++) {
// 	if (isPositive(arr[i])) {
// 		newArr.push(arr[i]);
// 	}
// }

// console.log(newArr);

/* Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false */

// function isNumberInRange(num) {
// 	return num > 0 && num < 10;
// }

// /*Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи. */

// var arr = [1,2,3,4,5,6,7,12,16,11],
//     mass = [];

// for (var i = 0; i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//         mass.push(arr[i]);
//     }
// }
// console.log(mass);

/* Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр */

// function getDigitsSum(num) {
// 	var num = String(num);
// 	var sum = 0;
// 	for (var i = 0; i < num.length; i++) {
// 		sum += Number(num[i]);
// 	}
// 	return sum;
// }

// console.log(getDigitsSum(123)); //выведет 6

// /* Найдите все года от 1 до 2018, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи */

// for (var i = 1; i <= 2018; i++) {
//     if (getDigitsSum(i) === 13) {
//         console.log(i);
//     }
// }

/* Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. */

// function isEven(even) {
//     return (!(even % 2));
// }
// console.log(isEven(3));

// /*  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.  */

// var mass = [1, 2, 3, 4, 5, 6];
// var newMass = [];

// for (var i = 0; i < mass.length; i++) {
//     if (isEven(mass[i])) {
//         newMass.push(mass[i]);
//     }
// }
// console.log(newMass);

/* Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число). */

// function getDivisors(num) {
//     var mass = [];
//     for (var i = 0; i < num; i++) {
//         if (num % i == 0) {
//             mass.push(i);
//         }
//     }
//     return mass;
// }

// console.log(getDivisors(12));

