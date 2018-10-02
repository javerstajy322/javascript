// Создаешь объект дефолтный, от которого наследуются свойства и функции с применением .this.
// Дефолтный объект === объект родитетль === прототип.
var Person = {
    constructor: function(name, age, gender) {
        this.name = name;
        this.age = age; 
        this.gender = gender;
        return this;
    },
    greet: function() {
        console.log("Hi, my name is " + this.name);
    }
};

var person, anotherPerson, thirdPerson;

person = Object.create(Person).constructor("John", 32, "male");

console.log(person);
person.greet();

