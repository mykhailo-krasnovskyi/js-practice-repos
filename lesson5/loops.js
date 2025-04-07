// i=i+1

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// for (let i = 0; i <= 10; i++) {

//     if (i === 3) {
//         break;
//     }
//     console.log(i);
// }


// for (let i = 0; i <= 10; i++) {

//     if (i === 3 || i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// let a = 0, b = 0;

// for (; a < 10 && b < 10; a++, b++) {
//     console.log(`a: ${a}, b: ${b}`);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let i = 666;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);


// const number = 5;

// for (let i = 1; i <= 10; i++) {
//     let result = number * i;
//     console.log(`${number}x${i} = ${result}`)
// }


// const number = 5;

// for (let i = 10; i > 0; i--) {
//     let result = number * i;
//     console.log(`${number}x${i} = ${result}`)
// }


for (let number = 1; number <= 10; number++) {
  
    for (let factor = 1; factor <= 10; factor++) {
        console.log('-');
        console.log(`number = ${number}`)
        console.log(`factor = ${factor}`)
 

        let result = number * factor;
        console.log(`${number}x${factor} = ${result}`)
    }

    console.log('------------------');

}