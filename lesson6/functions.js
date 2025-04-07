// Declaration

// function calculateSum(num1, num2) {
//     let result = num1 + num2;
//     console.log(`The sum is ${result}`);
// }

// function sayHi() {
//     console.log('Hello world');
// }
// function getSum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }


// calculateSum(5, 10);
// calculateSum(25, 30);
// calculateSum(50, 110);
// calculateSum(10, 511);

// let newResult = getSum(10, 20) * 100;
// console.log(newResult);


// Function expression
// greet2();

// function greet1() {
//     console.log('Hello');

// }

// const greet2 = function () {
//     console.log('Hello');
// }


// const getSum = (num1, num2) => {
//     let result = num1 + num2;
//     return result;
// }

// const multiplySelf1 = num => {
//     return num * num;
// }

// const multiplySelf2 = num => num * num;


// console.log(multiplySelf2(10));
// console.log(multiplySelf2(20));
// console.log(multiplySelf2(30));
// console.log(multiplySelf2(40));


// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// console.log(getRandomNumber(0, 10));


// function divideNumbers(num1, num2) {
//     if (num2 === 0) {
//         return 'Error. Dividing by zero';
//     }
//     return num1 / num2;
// }

// console.log(divideNumbers(10, 1));


// let globalValue = 'I am global';

// function someFunction() {
//     let globalValue = 'I am inside function';
//     console.log(globalValue);
// }


// if (true) {
//     let ifValue = 'I am inside if';
// }

// console.log(ifValue);
// someFunction();


// function greet(userName = 'Anonym User') {
//     console.log(`Hello, ${userName}`);
// }

// greet(undefined);

// function sum(num1 = 50, num2 = 100) {
//     return num1 + num2;
// }

// console.log(sum(undefined, 10));


// function foo() {
//     foo(); 
// }

// foo(); 

// function sum(...numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }

//     console.log(result);
// }


// sum(1, 10, 15);

// 5 10
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());