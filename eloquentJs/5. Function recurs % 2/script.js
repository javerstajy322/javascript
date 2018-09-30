// // Первый вариант.

// function isEven(n) {
// 	if (n == 0) {
// 		return true;
// 	}
// 	else if (n == 1) {
// 		return false;
// 	}
// 	else return isEven(n - 2); 
// }
// console.log(Boolean(isEven(6)));

function isEven(n) {
	if (n == 0) {
		return true;
	}
	else if (Math.abs(n) == 1) {
		return false;
	}
	else return isEven(Math.abs(n - 2)); 
}
console.log(Boolean(isEven(-2)));