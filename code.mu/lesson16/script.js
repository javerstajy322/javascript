/* Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой. */

// function ucfirst(str) {
//     var str = str[0].toUpperCase() + str.slice(1);
//     return str;
// }

// console.log(ucfirst('sssss'));

// /* Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello' */

// var str = 'var_text_hello';
// str = str.split('_');
// for (var i = 0; i < str.length; i++) {
//     str[i] = ucfirst(str[i]);
// }
// str = str.join('');
// console.log(str);

/* Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false */

// function inArray(elem, mass) {
//     for (var i = 0; i < mass.length; i++) {
//         return mass[i] == elem ? true : false;
//     }
// }

// console.log(inArray('яблоко', ['яблоко', 'sss', 'aaa', 'bbb']));

// function inArray(str, arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] === str) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// var str = 'яблоко';
// var arr = ['банан', 'яблоко', 'персик'];
// console.log(inArray(str, arr));

/* Дана строка, например, '123456'. Сделайте из нее '214365'. */

// pass