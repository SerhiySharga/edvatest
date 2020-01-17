const fs = require('fs')

sayHi();

function sayHi() {
    console.log('Hello');
    return 'Hello';
}

const func = function() {
    console.log('Hello');
}
func();

const func2 = func;
func2();

console.log(typeof sayHi);
console.log(sayHi.toString())

const funcArr = (name) => {
    console.log(`Hello, ${name}`);
}

funcArr();

module.exports.sayHi = sayHi;
module.exports.func2 = func2;

console.log(this)
