console.log("hello world")

// Nan operations 
console.log(NaN + 1)
console.log(NaN *2)
console.log(NaN/2)
console.log(NaN+NaN);



// Note:
// in Java Script we will able  to change the  type of the variable  at declaration time which is not allowed in major languages such as java and c++
// example:
let age  = 33;
age  = true;
console.log(age);



// Practice Questions
// 1`) Declare your name as a string  and print its length in js?
let myName = "priyaraj mohanty";
console.log(myName.length);
// 2) Declare your first name as a string and print its first character
console.log(myName[0]);
// 3) Declare your first name as a string and print its last character
console.log(myName[myName.length-1]);
// 4) find the output
console.log("apnacollege" + 87383);
// 5) what are lengths of an empty space & with a single space in a string?
let n1 = "";
let n2 = " ";
console.log(n1.length);
console.log(n2.length);
