var func = function() {
    return i = 10;
};

var myFunc = func();

var anotherFunc = function() {
    var i = 20;
    console.log(myFunc);
};

anotherFunc();