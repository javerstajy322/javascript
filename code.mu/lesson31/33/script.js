function func() {
	var input = document.getElementsByTagName('input');
	var elem = document.querySelectorAll('input + p');
	for (var i = 0; i < input.length; i++) {
		if (!input[i].checked) {
			elem[i].style.display = "none";
		} else {
			elem[i].style.display = "block";
		}
	}
}