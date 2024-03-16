// for wanting to learn something about the standard of JS  we can go to the ECMA 


console.log("hello world");
const accountId = 144553; //It cannot be further re-initialized
let accoountEmail = "hitesh@gmail.com";
var accountPassword = "12345";  //Not adviciable to use due to problem in block scope and functional scope
accountCity = "jaipur"; //Also not adviceble to use it
let accountState; //Undefined

// Note-1
// accountId = 2;
// console.log(accountId);


// Note-2
// We can print the all the variables in a tabular form within a order manner
console.table([accountId, accountPassword, accoountEmail, accountCity]);

// Lets learn something about the javascript Data Types
// ->
"use strict"; //treat all JS code as newer version




// Lets learn about type conversion in JS
let score  = "33abc";
console.log(score);
// Lets check the type of it
console.log(typeof score);

// Now lets convert it into a Number
let scoreInNumber = Number(score);
console.log(scoreInNumber); //NaN
console.log(typeof scoreInNumber); //number

// similarly if we want to change these type of conversion the output will be
let num = null;
let numInNumber = Number(num);
console.log("conversion of null to a  number value.");
console.log(typeof numInNumber); // number
console.log(numInNumber);   //0


// similarly
console.log("it is the conversion of boolean and undefined to a number type .");
let pass = true;
let passInNumber = Number(pass);
console.log(passInNumber); //number

console.log(typeof passInNumber);//1

// similarly
let mark = undefined;
let markInNumber = Number(mark);
console.log(markInNumber); //NaN
console.log(typeof markInNumber); //number


let str = "hello";
let strInNumber = Number(str);
console.log(strInNumber);
console.log(typeof strInNumber );

console.log("to the number conversion conclusion");
/*
1) "33" => 33
2) "33abc"=>NaN
3) true => 1
4) "liku"=>NaN
5) ""=>0
6) false=>0
7) Undefined=> NaN

*/

let isLoggedIn = 1;
let booleanisLoggediN = Boolean(isLoggedIn);
console.log(booleanisLoggediN);

// Simalarly if we want conversion in between the boolean and string 
let isLogout = "";
let booleanisLogout = Boolean(isLogout);
console.log(booleanisLogout);

// CONCLUSION
/*
1) "EMPTY" => FALSE
2) "STRING"=>TRUE
3)  1 =>TRUE
4)  0=>FALSE
*/

// LETS LEARN SOMETHING MORE ABOUT THE OPERATIONS
//In JS TO FIND THE POWER WE USE

let a  = 12;
let b = 3;
console.log(a**b);


// Lets learn some baic about the string manupulation
console.log("2"+1);
console.log(1+"2");
console.log("2" + 2 + 2); 222
console.log(2+ 4 +"2"); 62


console.log(3+4 * 5%3);
// it is manadatory to know the operator precedence when we are preaparing for the exam but it is always adviceable to add the brackts for better manupulation


console.log(true); //true
console.log(+true); //1
console.log(+"");//0


// Comparision operator
console.log("2">3);
console.log("02"<=4);
 

console.log(null>0);
console.log(null==0);
console.log(null>=0);


console.log(undefined >= 0);
console.log(undefined == 0);
console.log(undefined <0);


console.log("2" === 2);

// Summary
//Data type summary
/*
  There are two typ4es of data types
  1) Primitive
  2) Non-primitive

  There are majorly 7 types of primitve data types
  1) String
  2) Number
  3) Boolean
  4) null
  5)undefined
  6) symbol
  7) BigINT

  and also the non-primitive data types including
  1) Array
  2) Objects
  3) Functions


//   Each data type example*/
//Number
let num1 = 22;
let num2 = 2222.33;

// Boolean
let enter = false;

// null
const outside = null;

//undefined
let useremai;

// Symbol
const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id == anotherid);


//Bigint
let bigNum = 44444444444n;
console.log(typeof bigNum);


// Non-primitive types
// 1) Arrays
const heros = ["iron man", "Hulk","aquaman"];
console.log(heros);

// Object
let myobjj = {
    name :"hitesh",
    age:22,

}
console.log(typeof myobjj);



// Function
let myFunction = function()
{
    console.log("Hello world");

}

console.log(typeof myFunction);



//Lets learn about the memory basics
// 1) sTACK(Primitive)   2) hEAP(Non-primitive)

// all the primitive value were goes to the stack memory and any other assgned to it only get the copy of the reference where the original value cannot be ChannelMergerNode.
//and all the Non-primitive data were goes to the heap memory where the any other variable try to access it will get the reference where any changes will affect the original value

// Example
// Stack memory
let firstName  = "liku_Cutm";
let secondName = firstName;

console.log(firstName);
console.log(secondName);

// Example:2
// Heap Memory
let myInfo = 
{
  name:"gangsterid",
  id :"2202",
  age:22
}

let myInfo2 = myInfo;
myInfo2.age = 34;


console.log(myInfo);//Original value
console.log(myInfo2);//changed vales



//******************Lets learn about the String*******************//


// Note-1
// We can add two string maually like
// like
console.log("hello"+ "world");

// But it is always adviciable to use the template literal or string interpolation
// i,e
let user = "liku";
let ageAge = 33;
console.log(`i am the user and my name is ${user} and my age is ${ageAge} & i am very low for coding`)
// [[Prototype]]

// String
// anchor
// : 
// ƒ anchor()
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()
// charAt
// : 
// ƒ charAt()
// charCodeAt
// : 
// ƒ charCodeAt()
// codePointAt
// : 
// ƒ codePointAt()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ String()
// endsWith
// : 
// ƒ endsWith()
// fixed
// : 
// ƒ fixed()
// fontcolor
// : 
// ƒ fontcolor()
// fontsize
// : 
// ƒ fontsize()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// isWellFormed
// : 
// ƒ isWellFormed()
// italics
// : 
// ƒ italics()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// link
// : 
// ƒ link()
// localeCompare
// : 
// ƒ localeCompare()
// match
// : 
// ƒ match()
// matchAll
// : 
// ƒ matchAll()
// normalize
// : 
// ƒ normalize()
// padEnd
// : 
// ƒ padEnd()
// padStart
// : 
// ƒ padStart()
// repeat
// : 
// ƒ repeat()
// replace
// : 
// ƒ replace()
// replaceAll
// : 
// ƒ replaceAll()
// search
// : 
// ƒ search()
// slice
// : 
// ƒ slice()
// small
// : 
// ƒ small()
// split
// : 
// ƒ split()
// startsWith
// : 
// ƒ startsWith()
// strike
// : 
// ƒ strike()
// sub
// : 
// ƒ sub()
// substr
// : 
// ƒ substr()
// substring
// : 
// ƒ substring()
// sup
// : 
// ƒ sup()
// toLocaleLowerCase
// : 
// ƒ toLocaleLowerCase()
// toLocaleUpperCase
// : 
// ƒ toLocaleUpperCase()
// toLowerCase
// : 
// ƒ toLowerCase()
// toString
// : 
// ƒ toString()
// toUpperCase
// : 
// ƒ toUpperCase()
// toWellFormed
// : 
// ƒ toWellFormed()
// trim
// : 
// ƒ trim()
// trimEnd
// : 
// ƒ trimEnd()
// trimLeft
// : 
// ƒ trimStart()
// trimRight
// : 
// ƒ trimEnd()
// trimStart
// : 
// ƒ trimStart()
// valueOf
// : 
// ƒ valueOf()
// Symbol(Symbol.iterator)
// : 
// ƒ [Symbol.iterator]()
// [[Prototype]]
// : 
// Object
// [[PrimitiveValue]]
// : 
// ""
// [[PrimitiveValue]]
// : 
// "liku"

// Above are all the string manupulation methods which are inbuilt
// 1
let str1 = "Lima";
console.log(str1.length);
// 2)
console.log(str1.charAt("2"));
console.log(str1.indexOf("i"));

// 3) substring and slice methods in string
  //  -> in substring  method we cannot add the negative index value it's always starts from the starting index But using slice it can be possible

  let str2 = "priyaraj-mohanty"

  console.log(str2.slice(-4));//formula-> stringname.slice(-n)= slice(string.length-n)

  //4) String trim()method is used to remove the unnecessary space before and after the string but not the space between the indivisual character of that string
  let str3 = "     Anmol-padhi  ";
  console.log(str3);
  console.log(str3.trim());

// 5) String replace() is used to replace something on a string
let str4  = "Hiteshchoudhury";
let str5 = str4.replace("Hitesh", "Radha");
console.log(str5);


// Remember:
//    There any change in string doesnot affect to the original string


// String chaining
let myName = "   AjayDas";
console.log(myName);
console.log(myName.trim().toUpperCase());   //And it is always to be start the method implementation from the left to right

// String splice 
/*

// splice:removes/ replace / add elements in place

// splice(start, deleteCount,item0......itemN)
let msg5 = [12,2232,33,454,44,343,"liku"];
console.log(msg5.splice(4));
console.log(ms)

*/

// 6) Splice and Repeat
let age = [22,22,33,22,3,"liku"];

console.log(age.splice(2));
age.splice(1,3,"a","b","c");
console.log(age);

//  Splice understanding clearly
let splMthod = [1,22,33,"l","m","n"];
// let ans = console.log(splMthod.splice(0,2,"me","you"));
let ans = splMthod.splice(0,2,"me","you")
console.log(splMthod);

// 8) Repeat method for strings
let str9 = "Liku-ima";
console.log("repeat string");
console.log(str9.repeat(4));


// To check some substring or character is there inside the string we use the method "includes("substring and charname");
let str7 = "myname";
console.log(str7.includes("m"));

// Split method in js
let str10 = "liku myname raj";
console.log(str10.split(" ")); //it is a split of contents on the basis of space






// ******************Number system************************* 
// As JS is a dynamic typed language so the type of the variable is automatically given but we can explicitly also can declare that the entering value shoold be numeric onpla
// Example
let name1 = 111.11
let name2 = new Number(222);
console.log(name2);
console.log(name1);


console.log(typeof name2);
console.log(typeof name1);

//WE CAN ALSO NOW CHANGE IT TO ANY TIME BY USING THE THIS METHODS

console.log(name2.toString().length);
 console.log( name2);
 console.log(name2.toFixed(3));
 console.log(name1.toPrecision(3));

 const hundred = 10000000;
 console.log(hundred.toLocaleString('en-IN'));
// To find the max and min value of numeric data type we have the js number (MAX_VALUE AND MIN_VALUE options)
// i.e
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);







// ************************Maths*********************************//
console.log(Math.PI);
console.log(Math.pow(3));
console.log(Math.abs(-22));
console.log(Math.round(4.6));
console.log(Math.floor(44.6));
console.log(Math.ceil(44.66));
console.log(Math.sqrt(4));
console.log(Math.min(2,33,4545,22));
console.log(Math.max(22,33,22,3));
console.log(Math.random());   //it always give the value in between 0 to 1 always


// Suppose during building a game where the min and max trials output are predefined  we use the random function of math like this
const min = 1;
const max = 6;
console.log(Math.floor(Math.random(max-min)*10))+1;
//.SUPPOSE IT IS FOR LUDO FOR EACH TIME IT WILL RETURN A VALUE IN BETWEEN 1 -> 6







