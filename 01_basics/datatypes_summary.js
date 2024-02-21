//  Primitive
// 
/* These are all the 7 major primitive data types
1) String 
2) Number
3) Boolean
4) null
5) undefined
6) Symbol
7) BigInt
*/

// Note---------]
// Java-Script is a dynamic typed language it is not necessary to declare the variable types
// ----------]

// Reference Type or Non-Primittive Types
/*
1) Array
2) Objects
3) Functions
*/


// 
//  Primitive
// 
/* These are all the 7 major primitive data types
1) String 
2) Number
3) Boolean
4) null
5) undefined
6) Symbol
7) BigInt
*/

// Note---------]
// Java-Script is a dynamic typed language it is not necessary to declare the variable types
// ----------]

// Reference Type or Non-Primittive Types
/*
1) Array
2) Objects
3) Functions
*/


//Lets understand all the data types separatelty
// Number
/*
Number type
The Number type is a double-precision 64-bit binary format IEEE 754 value. It is capable of storing positive floating-point numbers between 2-1074 (Number.MIN_VALUE) and 21024 (Number.MAX_VALUE) as well as negative floating-point numbers between -2-1074 and -21024, but it can only safely store integers in the range -(253 − 1) (Number.MIN_SAFE_INTEGER) to 253 − 1 (Number.MAX_SAFE_INTEGER). Outside this range, JavaScript can no longer safely represent integers; they will instead be represented by a double-precision floating point approximation. You can check if a number is within the range of safe integers using Number.isSafeInteger().

Values outside the range ±(2-1074 to 21024) are automatically converted:

Positive values greater than Number.MAX_VALUE are converted to +Infinity.
Positive values smaller than Number.MIN_VALUE are converted to +0.
Negative values smaller than -Number.MAX_VALUE are converted to -Infinity.
Negative values greater than -Number.MIN_VALUE are converted to -0.

*/


let num1 = 233;
console.log(num1)
let num2 = 0.9999999999999999999 //After reaching its maximum limits it is converted to its ceil value that is 1 here
console.log(num2)

let num3 = 333.44;
console.log(typeof num3);





/*
Boolean
Boolean represents a truth value ->true or false /  yes or no
*/
let age = 23;
let isAdult = true;


console.log(age);
console.log(isAdult);



/*
String
Strings are the text or sequence of characters
*/
//Example
let name = "Tony Stark";
let char = 'a';
let num = "56";
let name2 = 'raja'
let name3 = "" ;  //it is not show any output if we print the value 
console.log(typeof num);
console.log(name3)           
let sentence1 = "my name is 'priyaraj";
let sentence2 = 'my name is also "liku"';
// let sentence3 = 'this is a 'apple'';     
// let sentence4 = "this is a "apple"";   //These two are going to through an error because withing the same content on e single type of quotation is not applicable


console.log(sentence1);
console.log(sentence2);




// ->
/*
->
Null
The null value represents the intentional absence of any object value.
 To be explicitely assigned.


 ->
 Undefined
 A variable that has not been assigned a value is of type undefined.
 */


 //Example

 let id;
 console.log(id);


 let a = null;
 console.log(a);
 console.log( typeof a);



//  Symbol
// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding.

// Every Symbol() call is guaranteed to return a unique Symbol. Every Symbol.for("key") call will always return the same Symbol for a given value of "key". When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.


const id_liku = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId);

// Big Int
// // 
// A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() function (without the new operator) and giving it an integer value or string value.
const bigNumber  = 3736736763767373n;
console.log(typeof bigNumber);
 


// Reference or Non primitive data types
// Arrays
const hero = ["avenger", "gurdian of the galaxy", "heros"];
name :"Hitesh"

// Object
let myObj = {name:"liku" ,age :222}
console.log(myObj);
// Function
const myFunction = function()
{
    console.log("Hello world");

}

console.log(typeof myFunction)
console.log(typeof hero)