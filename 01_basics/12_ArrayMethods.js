let arr = [12,22,3,"liku",33.333];
console.log(arr.push("hello guys"));
console.log(arr.pop());
console.log(arr.unshift("12222222"));
console.log(arr.shift());
console.log(arr);

// Lets do a practice
// Q1)  For the given start state of an array, change it to the final form using methods.
let  start = ['january','july','march','august'];
console.log(start.shift());
console.log(start.shift());

console.log(start.unshift("june"));
console.log(start.unshift("july"));
console.log(start);

let conc1 = ["lima","dev","burma","hello"];
let conc2 = [22,22,44,2,2];
console.log(conc1.concat(conc2));
console.log(conc2.concat(conc1));
console.log(conc1.reverse());

// Array Slicing 
// It copies a portion of an array
// Example
let arraY = ["string","array","liku",22.3,545,3];
console.group(arraY.slice);  //print the whole copy  of the array
console.log(arraY.slice(3)) //print all the items after third index
console.log(arraY.slice(1,3)); //print the items starting from 1 and 2
console.log(arraY.slice(-2));//it will length-num to length
console.log(arraY.slice(100));//it will give an empty block
console.log(arraY.slice(arraY.length));// it willl only give a empty block also 


//continue from arrays  splice methos
// Splice
// Removes/ replace/ add elements in place
// splice (start, deleteCount, item0.....itemn)
//  it is differ from slice that its changes refelcted to the main string

let arr5 = ["mercdes","gwagon","ferrari","lamborghini"];
console.log(arr5.splice(3));
console.log(arr5.splice(6,0,"likuown", "limaown"));
console.log(arr5);
console.log(arr5[2][3]);
console.group(arr5.splice(0,0,"amabassador",23222));
console.log(arr5);
console.log(arr5.splice(2,0,"volvo","alto"));
console.log(arr5);
// Lets do some practice on sort methods
let arr6 = ["mercedes", "bmw","defender","xuv"]
console.log(arr6);
// arr6.sort();   it will sort the elements according to the english alphabet order by comparing the first letter of the each string
console.log(arr6);  
let  char = ['a' , 'r','t','u'];
console.log(char.sort());

//Integrals or with numbers
 let intNums = [12,22,2,33,442,44];
 let intSORT = intNums.sort();
 console.log(intSORT);
   //It is unable to sort the array in ascending order because in case of sort method first it will convert the whole array elements to string and then sort them as here the number are not in the form of utf char or string
