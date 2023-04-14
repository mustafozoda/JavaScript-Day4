



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

function add(x = 0) {
    return function (y = 0) {
        return x + y;
    }
}
const inside = add(4);
console.log(inside(4));
