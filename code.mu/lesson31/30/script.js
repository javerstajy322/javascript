function func() {
	var elem = document.querySelectorAll('#text');
	for (var i = 0; i < elem.length; i++) {
		if (elem[i].checked) {
			elem[i].checked = false;
		} else {
			elem[i].checked = true;
		}
	}
}