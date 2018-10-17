/*	Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе */

// var a = [1, 2, 3],
//     b = [4, 5, 6];

// console.log(a.concat(b));

/* Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1] */

// var a = [1, 2, 3];
// console.log(a.reverse());

/* Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6 */
/* Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. */

// var a = [1, 2, 3];
// a.push(4, 5, 6);
// console.log(a);
// a.unshift(-2, -1, 0);
// console.log(a);

/* Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент */

// var mass = ['js', 'css', 'jq'];
// console.log(mass.shift());
// console.log(mass.pop());

/* 	Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. Показать решение. */

// var arr = [1, 2, 3, 4, 5];
// var result = arr.slice(0, 3);
// console.log(result);

// var arr = [1, 2, 3, 4, 5];
// var result = arr.slice(3, 5);
// console.log(result);

/*Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5] */

// var mass = [1, 2, 3, 4, 5];

// mass.splice(1,2);

// console.log(mass);

/* Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4] */

// var mass = [1, 2, 3, 4, 5];

// var result = mass.splice(1,3);

// console.log(result);

/*Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. */

// var arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

/* Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'] */

// var mass = [1,2,3,4,5];
// mass.splice(1,0, 'a', 'b');
// mass.splice(6,0,'c');
// mass.splice(8,0,'e');
// console.log(mass);

/* Дан массив [3, 4, 1, 2, 7]. Отсортируйте его */

// var mass = [3,4,1,2,7];

// console.log(mass.sort());

/* Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей */
// var arr = {js: 'test', jq: 'hello', css: 'world'};
// var result = Object.keys(arr);
// console.log(result);

    