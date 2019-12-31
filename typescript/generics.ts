// What are generics?
// Are a way of providing type arguments on
// classes or objects, such that they become
// reusable.

const arr: number[] = [];
arr.push(1);
arr.push(2);
arr.push(3);

const words: string[] = [];
words.push('hello');

// If ANY is too much, you can use an
// intersection with the |
const flexible: Array<string | number> = []
flexible.push(1);
flexible.push('hello');

// Pipes can be used with strings to define
// valid strings
let str: 'Hello' | 'World' = 'Hello';
str = 'World';
str = 'Everyone';

enum MyEnum {
    GRAPE,
    CHERRY,
    ORANGE
}

const product: {
    price: number,
    name: string
} = {
    price: 1,
    name: 'Banana'
};