// What are generics?
// Are a way of providing type arguments on
// classes or objects, such that they become
// reusable.
var arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
var words = [];
words.push('hello');
// If ANY is too much, you can use an
// intersection with the |
var flexible = [];
flexible.push(1);
flexible.push('hello');
// Pipes can be used with strings to define
// valid strings
var str = 'Hello';
str = 'World';
str = 'Everyone';
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["GRAPE"] = 0] = "GRAPE";
    MyEnum[MyEnum["CHERRY"] = 1] = "CHERRY";
    MyEnum[MyEnum["ORANGE"] = 2] = "ORANGE";
})(MyEnum || (MyEnum = {}));
var product = {
    price: 1,
    name: 'Banana'
};
