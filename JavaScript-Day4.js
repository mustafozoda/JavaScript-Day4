



// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(5))




// function add(x) {
//     return function(y) {
//       return x + y;
//     }
//   }

//   const addTwo = add(2);
//   console.log(addTwo(3));

//   const addTen = add(10);
//   console.log(addTen(5));






// #task6

// function plus(n){
//     if(n==0){
//         return 0;
//     }
//     return n+plus(n-1)
// }
// console.log(plus(5))



// task14

// function add(x = 0) {
//     return function (y = 0) {
//         return x + y;
//     }
// }
// console.log(add(10)());




// function add(x = 0) {
//     return function (y = 0) {
//         return x * y;
//     }
// }
// console.log(add(10)());



// function fib(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2)
// }
// console.log(fib(5))





// function fibonacci(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(8));
























//------------------------------------------------task1--------------------------------------------------

// function sum(n) {
//     if (n == 0) {
//         return 0
//     }
//     return n + sum(n - 1)
// }
// console.log(sum(5))

//------------------------------------------------task2--------------------------------------------------

// function factorial(n) {
//     if (n == 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }
// console.log(factorial(5))

//------------------------------------------------task3--------------------------------------------------

// function sumdig(n) {
//     if (n == 0) {
//         return 0
//     }
//     return n % 10 + sumdig(Math.floor(n / 10))
// }
// console.log(sumdig(1125))

//------------------------------------------------task4--------------------------------------------------

// function fac2(n) {
//     if (n % 2 == 0 && n == 0) {
//         return 1;
//     }
//     else if (n % 2 == 1 && n == 1) {
//         return 1;
//     }
//     return n * fac2(n - 2)
// }
// console.log(fac2(148))

//------------------------------------------------task5--------------------------------------------------

// function makeplusfunction(n) {
//     return function (n2) {
//         return n + n2;
//     }
// }
// const plusfive = makeplusfunction(5)
// console.log(makeplusfunction(5)(2))
// console.log(plusfive(-8))
// const plusten = makeplusfunction(10)
// console.log(plusten(0))
// console.log(plusten(188))
// console.log(plusfive(plusten(0)))

//------------------------------------------------task6--------------------------------------------------

// function product(a, b) {
//     return function (a1, b1){
//         return function (a2, b2){
//             return (a * a1 * a2) + (b * b1 * b2);
//         }
//     }
// }
// console.log(product(1, 2)(1, 1)(2, 3))

//------------------------------------------------task7--------------------------------------------------











//------------------------------------------------task1--------------------------------------------------

// function add_suffix(suffix) {
//     return function (input) {
//         return input + suffix;
//     }
// }
// const add_ly = add_suffix("ly");
// console.log(add_ly("hopeless"));

// const add_less = add_suffix("less");
// console.log(add_less("fear"));

//------------------------------------------------task2--------------------------------------------------

// function add(n) {
//     return function (n2) {
//         return n + n2;
//     }
// }
// console.log(add(10)(20));
// console.log(add(0)(20));

//------------------------------------------------task3--------------------------------------------------

// function addsnum(n){
//     return function(n2){
//         return n+n2;
//     }
// }
// const add1=addsnum(1);
// console.log(add1(3));
// console.log(add1(5.7));

//------------------------------------------------task4--------------------------------------------------

// function redundant(str) {
//     return function () {
//         return str;
//     }
// }
// const f1 = redundant("Apple")
// console.log(f1())

//------------------------------------------------task5--------------------------------------------------

