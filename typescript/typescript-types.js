var a = 1;
// a = 'Hello'; Invalid as it's a must be a number
var b = 'hello';
// a = b; Invalid as it's a must be a number
// b = 2; Invalid as b must be a string
b = '2';
// returns a string
// c IS a function
var c = function () {
    return 'function return';
};
// D will be a function that accepts to numbers and returns a numbers
// the function created accepts two numbers and returns a number
var d = function (a, b) {
    return a + b;
};
var e = function (i) { return i * 2; };
var numVariable = d(1, 2);
numVariable = e(1);
// numVariable = d('a', 'b'); Invalid, function argument typing also enforced
