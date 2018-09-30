function countBs(str, char) {
	var countChar = 0;
	for (i = 0; i< str.length; i++) {
		if (str[i] == char) {
			++countChar;
		} 
	}
	return countChar;
}
console.log(countBs("BBBssssBBBsss", "s"));