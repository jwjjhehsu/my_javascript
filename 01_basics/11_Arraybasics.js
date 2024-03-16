let a = [12,292,209,2];
console.log(a);
// empty array
let b = ["liku","lima","ddid","diti"];
// Heterogenous array can also be created in js
let c = ["liku",78,"lima",33.44,33];
console.group(c);
// empty string is also created liken following
let emp = [];
console.log(emp); //[]
console.log(emp[0]);//undefined
console.log(typeof(emp)); //object
console.log(emp.length); //0

//  Info
let info = [12,"likuiam",44,'a'];
console.log(info[1][2]);
// here we use the info to access the indivisual index value of the selected index


//Strings mutabiliy in arrays
let arr = ["Priyaraj","liku",22,33.44,22];
console.log("before change: " + arr);
arr[1] = "Happy";
console.log(arr[0].replace("P","T"));
console.log("after change" + arr);

// we can create and store a value in an index which might be not exist during that the gapped are empty space of items

let arr2 = [12,22,2,22]
arr2[100]= 22222;
console.log(arr2);

// constant array
const arre = [12,22,22,33,2];
arre.push(323);
// it can successfully add a new element
console.log(arre);
arre.pop();
// it can also remove the element from the array

// But if want to assign a new array to it or new array element we can not do that
// arr = [12,22,22,33,2];
// console.log(arr);

// let cars = ['mercedes','audi','ferrari']
// arr = cars;
// console.log(arr);  //it cannot be also be done 


// Nested Arrays ->(Arrays of Arrays)
let arrOfArr = [[12,22],[33,44],[44,55]];
console.log(arrOfArr);
console.log(arrOfArr[0]);
console.log(arrOfArr[1].length);

// How to acces the indivisual array elements inside a nested array
console.log(arrOfArr[0][3]); //undefied
console.log(arrOfArr[1][1]);





