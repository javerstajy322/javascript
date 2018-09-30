function reverseArray(arr) {
	var result = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		result.push(arr[i]);
	}
	return result;
}
console.log(reverseArray(["A", "B", "C"]));


//////////////////////////////////////////////


var arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(arrayValue) {
	for (var i = 0; i < arrayValue.length / 2; i++) {
		var tmp = arrayValue[i];
		arrayValue[i] = arrayValue[arrayValue.length - i - 1];
		arrayValue[arrayValue.length - i - 1] = tmp;
	}
}
reverseArrayInPlace(arrayValue);
console.log(arrayValue);