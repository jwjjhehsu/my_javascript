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
