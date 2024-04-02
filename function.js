// function addNums(a,b){
// c=a+b;
// console.log(c);
// }
// addNums(10,20);

// //console.log(c);
// const getAvg = function(m1,m2,m3){
//    // console.log((m1+m2+m3)/3);
//    let avg =(m1+m2+m3)/3;
//    return avg;
// }
// const result = getAvg(78,89,91);
// console.log(result);
//  const factorial = (n)=>{
//     let f=1;
//     for (let i = 2; i <=n; i++) {
//         f*=i;
        
//     }
// }
// const fact6 = factorial(6);
// console.log(fact6);

// console.log(25**0.5);
// let m = 35;
// let sqrt = m** 0.5;
// console.log(sqrt);
// console.log(sqrt=== parseInt(sqrt));
// console.log(Number.isInteger(sqrt));
//  const chekPerfectsquare =(num)=>{
//     let s=num**0.5;
//     return s=== parseInt(s);
//  }
//   if (chekPerfectsquare(2556)) {
    
//     console.log('perfect squar');
//   }else
//   {
//     console.log('not perfect square');
//   }
  



//   function sumInRange(start, end) {
//    let sum = 0;
//    for (let i = start; i <= end; i++) {
//        sum += i;
//    }
//    return sum;
// }

// // Example usage:
// const result = sumInRange(1, 10); // Calculates the sum of numbers from 1 to 10
// console.log(`Sum of numbers from 1 to 10: ${result}`);

// function isPalindrome(number) {
//    const originalNumber = number;
//    let reversedNumber = 0;

//    while (number > 0) {
//        const digit = number % 10;
//        reversedNumber = reversedNumber * 10 + digit;
//        number = Math.floor(number / 10);
//    }

//    return originalNumber === reversedNumber;
// }

// // Example usage:
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(12321)); // true
// console.log(isPalindrome(12345)); // false

// Create an array of names
// const names = ["abc3534", "defgh", "ijklmn", "opq", "restu", "vwx54", "yz2135"];
// const longNames = names.filter(name => name.length > 5);
// console.log("Names with length greater than 5:");
// longNames.forEach(name => console.log(name));


// const numbers = [300, 550, 600, 750, 400, 650, 800];

// const filteredNumbers = numbers.filter(number => number > 500 && number < 700);

// console.log("Filtered numbers:", filteredNumbers);
 


const numbers = [2, 3, 4, 5, 6];
const cubes = numbers.map(number => number ** 3);
console.log("Cubes of the numbers:", cubes);


