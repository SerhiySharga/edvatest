const add = function (firstNumber, secondNumber = 3) {
    return firstNumber + secondNumber;
};

/*
function subtract(){
    let numbersResult = firstNumber - secondNumber;
    console.log(numbersResult);
}
subtract();

function multiply(){
    let numbersResult = firstNumber * secondNumber;
    console.log(numbersResult);
}
multiply();

function divide(){
    let numbersResult = firstNumber / secondNumber;
    console.log(numbersResult);
}
divide();

 */

module.exports.addFunc = (a, b) => a + b;
module.exports.add = add;