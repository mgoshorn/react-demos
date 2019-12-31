var Cat = /** @class */ (function () {
    function Cat(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
    }
    Cat.prototype.sayHello = function () {
        console.log('Meow');
    };
    Cat.prototype.pet = function () {
        console.log('Hello');
    };
    return Cat;
}());
