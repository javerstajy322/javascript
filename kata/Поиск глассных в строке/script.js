//Поиск гласных.
function getCount(str) {
    var vowelsCount = 0;

    str = str.split("");
    for (var i in str) {
        if ((str[i] == 'a') || (str[i] == 'e') || (str[i] == 'i') || (str[i] == 'o')) {
            vowelsCount++;
        }
    }

    return vowelsCount;
}

console.log(getCount('saseioos'));

// Регулярные выражения -i = регистр -g все элементы.
function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}