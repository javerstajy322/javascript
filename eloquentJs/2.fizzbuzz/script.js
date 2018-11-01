// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//
/* Мой вариант. № 1. 
var number = 1;

for (i = 0; i < 100; i++ ) {
    if (!( number % 3 )) {
        console.log( number + " = Fizz");
        number += 1;
        continue;
    } else if (!( number % 5 )) {
        console.log( number + " = Buzz");
        number += 1;
        continue;
    }
    console.log(number);
    number += 1;
}
*/

// var i = 92;

// console.log(Boolean((((i % 3)) && ((i % 5)))));

// Мой вариант. №2. 
// Тупил с делением без остатка.
for (var i = 1; i < 100; i++) {
    var number = "";
    if (i % 3 == 0) {
        number += "Fizz";
    }
    if (i % 5 == 0) {
        number += "Buzz";
    }
    if (i % 3 && i % 5) {
        number += i;
    }
    console.log(number);
}