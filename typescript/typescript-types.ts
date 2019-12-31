let a: number = 1;
// a = 'Hello'; Invalid as it's a must be a number

let b: string = 'hello';
// a = b; Invalid as it's a must be a number

// b = 2; Invalid as b must be a string
b = '2';

// returns a string
// c IS a function
const c: () => string = function(): string {
    return 'function return';
}

// D will be a function that accepts to numbers and returns a numbers
// the function created accepts two numbers and returns a number
const d = function(a: number, b: number): number {
    return a + b;
}

const e: (i:number) => number = (i: number) => i*2;

let numVariable: number = d(1, 2);
numVariable = e(1);

// numVariable = d('a', 'b'); Invalid, function argument typing also enforced

