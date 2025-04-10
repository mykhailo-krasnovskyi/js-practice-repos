// const hof = (callback, message) => {
//     console.log('Inside HOF - START');
//     callback(message);
//     console.log('Inside HOF - FINISH');
// }

// function sayHi() {
//     console.log('Hi!');
// }

// function sayBye() {
//     console.log('Bye!');
// }

// function saySomething(message) {
//     console.log(message);
// }

// hof(sayHi);


// hof(sayBye);

// hof(saySomething, 'Test message');


// function processPayment(onSuccessCb, onFailureCb, paymentId) {
//     const isPaymentSuccess = false;

//     if (isPaymentSuccess) {
//         onSuccessCb(paymentId);
//     } else {
//         onFailureCb(paymentId);
//     }
// }

// function onSuccessPayment(paymentId) {
//     console.log(`Payment ${paymentId} is successful`);
// }

// function onFailurePayment(paymentId) {
//     console.log(`Payment ${paymentId} is failed`);
// }


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const alice = new Person('Alice', 30);
// console.log(alice);
// console.log(alice.name); // Виведе "Alice"
// console.log(alice.age); // Виведе 30

// const andrew = new Person('Andrew', 20);
// console.log(andrew);

// const sum = () => { 

// }

// (function() {
//     const message = "Це локальна змінна";
//     console.log(message);
// })();

// console.log(message);


// function outer() {
//     let outerVar = 10;

//     function inner() {
//         console.log(outerVar);
//     }

//     return inner;
// }

// let closureFn = outer();
// closureFn(); // Виведе 10

// function counter() {
//     let count = 1;

//     return function () {
//         count = count + 1;
//         return count;
//     }
// }

// let counter1 = counter();
// let counter2 = counter();



// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());



// function multiplier(num1) {
//     return function (num2) {
//         return num1 * num2;
//     }
// }


// const double = multiplier(2);
// const triple = multiplier(3);
// const quadruple = multiplier(4);
// const hundredple = multiplier(100);

// console.log(double(10));
// console.log(double(5));
// console.log(triple(5));
// console.log(quadruple(5));
// console.log(hundredple(5));


// function countToTen(startValue) {
//     for (let i = startValue; i <= 10; i++) {
//         console.log(i);
//     }
// }

// function countToTenRecursion(startValue) {
//     if (startValue <= 10) {
//         console.log(startValue);
//         countToTenRecursion(++startValue);
//     }
// }


// countToTenRecursion(3);
// console.log('-----------')
// countToTenRecursion(6);


// function traverse(node) {
//     console.log(node.value);
//     node.children.forEach(child => {
//         traverse(child); // Рекурсивний виклик для кожного дочірнього вузла
//     });
// }


// const tree = {
//     value: 1,
//     children: [
//         {
//             value: 2,
//             children: []
//         },
//         {
//             value: 3,
//             children: [
//                 {
//                     value: 4,
//                     children: []
//                 },
//                 {
//                     value: 5,
//                     children: []
//                 }
//             ]
//         }
//     ]
// };

// traverse(tree);



// const array = ['banana', 'apple', 'orange', 'kiwi', 'cherry']
// const arrayIterator = array[Symbol.iterator]()

// console.log(arrayIterator.next()) // { value: 'banana', done: false }
// console.log(arrayIterator.next()) // { value: 'apple', done: false }
// console.log(arrayIterator.next()) // { value: 'orange', done: false }
// console.log(arrayIterator.next()) // { value: 'kiwi', done: false }
// console.log(arrayIterator.next()) // { value: 'cherry', done: false }
// console.log(arrayIterator.next()) // { value: undefined, done: true }


// function* myGenerator() {
//     yield 1
//     yield 2
//     yield 'THIRD'
// }

// const generator = myGenerator()

// console.log(generator.next()) // { value: 1, done: false }
// console.log(generator.next()) // { value: 2, done: false }
// console.log(generator.next()) // { value: 3, done: false }
// console.log(generator.next()) // { value: undefined, done: true }


// function outerFoo() {
//     const outerVar = 'Test';
//     console.log(outerVar);

//     function innerFoo() {
//         const innerVar = 'Test Inner';
//         console.log(innerVar);
//     }

//     innerFoo();

// }

// outerFoo();



// function divideNumbers(a, b) {
//     if (b === 0) {
//         throw new Error("Ділення на нуль недопустиме!");
//     }
//     return a / b;
// }

// try {

    
//     divide1(5,10);
//     divide1(5,10);
//     divide1(5, 0);
// } catch (error) {
//     console.error("Сталася помилка:", error.message);
//     console.log('TESTTEST')
// } finally {
//     console.log('FINALLY BLOCK');
// }


// console.log(divideNumbers(10, 0));