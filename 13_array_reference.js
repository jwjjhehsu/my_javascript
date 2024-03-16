// case-1
let arr = [12,22,22];
let arrCopy = [12,22,22];
console.log(arr==arrCopy);
console.log(arr===arrCopy);

// Case-02
let arr1 = [123,22,34,2];
let arr1Copy = arr1;
console.log(arr1Copy == arr1);
console.log(arr1Copy === arr1);

// Here as both the array were pointing ot the same array locations so that any change made to any array rerferences reflect to the both the array locations
arr1.push("liku");
console.log(`arr1 is  ${arr1} `);
console.log(`arr1 is  ${arr1Copy} `);

arr1Copy.pop();
console.log(`arrCopy is ${[arr1Copy]}`);
console.log(`arr is ${[arr1]}`);




