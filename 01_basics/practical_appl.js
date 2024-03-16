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

// practice questions 2
//   Q1) For the given string:
    // let msg = "help!";
    // Trim it and convert it to uppercase .
    let msg = "help!";
    console.log(msg.trim().toUpperCase());

    //   Q2)For the String -> let name  = "ApnaCollege", predict the output for the following:
      let nameOne = "ApnaCollege";
      console.log(nameOne.slice(4,9));
      console.log(nameOne.indexOf("na"));
      console.log(nameOne.replace("Apna", "Our"));
      console.log(nameOne.slice(5));
      console.log(nameOne.slice(2,7));
    //   Q3) Separate the "College" part in above string and replace "l" with "t"in it

      console.log(nameOne.slice(4).replace("l", "t"));
    //   To change the both l we can use an another variable then by replacing it can reflecting the change
    let newstr = nameOne.slice(4).replace("l", "t");
    console.log(newstr);
    console.log(newstr.replace("l","t"));

    // OR WE CAN ALSO DO IT BY CHAINING
    console.log(nameOne.slice(4).replace("l","t").replace("l","t"));



// ASSIGNMENT 
let startt = ['january', 'july', 'march', 'august'];
console.log(startt.splice(0,2,"july","june"));
console.log(startt);
// Q2) Return the index of the "javascript" from the given array, if it was reversed.
 let lang = ['c','c++','html','javascript','python','java','c#', 'sql'];
 console.log(lang.reverse().indexOf("javascript"));
 


// Create a nested array to show the following tic tactoe game tests.

let ticArr = [['X',null,0],[null,'X',null],[0,null,'X']];
console.log(ticArr);
// now if we want to change the null value to zero from the second arrays we can use the js array index accessing value
ticArr[0][1]  = 0;
console.log(ticArr);



// NOW LETS DO THE ASSIGNMENT QUESTION 
// 1) FIND A ELEMENT IS PRESENT INSIDE AN ARRAY OR NOT
let  arrMake = [12,22,343,3,3];
let item = 22;
if(arrMake.indexOf(item) != null)
{
  console.log("the element is present inside the array.");

}
else
{
  console.log("the element isnot present inside the array.");

}
// 2) Write a Java script program to get the first n elements of an array.[n can be any positive number]
// For example:
// for array[7,9,0,-2] and n  = 3
// print[7,9,0]


let arrt = [12,22,2,3,-2,22,3];
let num = 4;
let ans3 = arrt.slice(0,num)
console.log(ans3);

// 3) Write a Java Script program to get the last n elements of an array.[n can be any positive number].
// for example:for array[7,9,0,-2] and n = 3;
// print[9,0,-2];

let arrt2 = [22,33,5,3,-2,-22];
let choice  = 4;
console.log(arrt2.slice(arrt2.length-choice));


// Qs3.
// Write
// a
// JavaScript
// program
// to
// check
// whether
// a
// string
// is
// blank
// or
// // not.

let str2 = "priyaraj";
if(str2.length == 0)
{
  console.log("sstring is empty");

}else
{
  console.log("string is empty");

}


// Qs4.
// Write
// a
// JavaScript
// program
// to
// test
// whether
// the
// character
// at
// the
// given
// (character)
// index
// is
// lower

let strcheck  = "PriyaRaj";
let idx = 3;
if(strcheck[idx] == strcheck[idx].toLowerCase())
{
  console.log("the element is in lowercase");

}else
{
  console.log("the character is in Uppercase");

}


// Qs5.
// Write
// a
// JavaScript
// program
// to
// strip
// leading
// and
// trailing
// spaces
// from
// a
// string




//anS:
let strgap = "       liku i      ";
console.log(strgap.trim());
