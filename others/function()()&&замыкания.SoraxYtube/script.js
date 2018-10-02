//// ## Функция которая возвращает функцию. В первой функции нет параметров, во второй есть.
var func = function () {
    var i = 10;
    return function (a, b) {
        return sum = a + b;
    }
};

console.log(func()(2, 3));

//// ## Замыкания
//// Замыкание функции это дерево по их области видимости.
//// (когда в функции находится другая функция. И она берет параметры из себя т.к. по зоне видимости она выигрывает)
//// С учетом что при обычном объявлении var i = (any number) в функции.
//// Сборщик мусора (garbage collection) удаляет ее.
// var func = function() {
//     var i = 2;
// } 
//// ### При выполнении первой функции создается объет с локальными переменными и содержащимеся функциями
//// ### Вторая функция ссылкается на локальные переменные и не дает их уничтожить сборщику мусора.
// var func = function () {
//     return function () {
//         return i;
//     }
// }
//// ### Весь прикол замыкания в возможности через вторую функцию увеличивать что-то вне видимости программы.
//// ### Завися от количества ее вызовов. 
var counter = (function() {
    var count = 0;
    return function() {
        return count++;
    }
}());

//// То что написал я.
//// Не много не понимаю. Т.к. оно работает. а по сути не должно, наверно.
var func = function () {
    return i = 10;
};

var myFunc = func();

var anotherFunc = function () {
    var i = 20;
    console.log(myFunc);
};
anotherFunc();

//// То что  написал Sorax.
var func = function () {
    var i = 10;
    return function () {
        return i;
    }
};

var myFunc = func();

var anotherFunc = function () {
    var i = 20;
    console.log(myFunc());
};
anotherFunc();