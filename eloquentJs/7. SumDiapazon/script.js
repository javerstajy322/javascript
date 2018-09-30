var mas = [];
function range(a, b) {
	for (; a < b; ++a) {
		mas.push(a);
	}
	return mas;
}

function sum(mas) {
	sum = 0;
	for (var i = 0; i < mas.length; ++i) {
		sum += mas[i];
	}
	return sum;
}


console.log(range(1, 10));
console.log(sum());