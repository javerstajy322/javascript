
var cityArr = {
	'aus': ['Мельбурн', 'Сидней', 'Аделаида', 'Брисбен', 'Хобарт'],
	'jap': ['Токио', 'Киото', 'Осака', 'Иокогама'],
	'sar': ['Кейптаун', 'Йоханесбург'],
}

var prime_select = document.getElementById('country');
prime_select.addEventListener('change', f1);
prime_select.addEventListener('change', f1);


var select_cities = document.getElementById('cities');

function f1() {
	select_cities.innerHTML = '';
	var select_country = prime_select.value;
	for (var i = 0; i < cityArr[select_country].length; i++) {
		var new_option = document.createElement('option');
		new_option.innerHTML = cityArr[select_country][i];
		select_cities.appendChild(new_option);
	}
}