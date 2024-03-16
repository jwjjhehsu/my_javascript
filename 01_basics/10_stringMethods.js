let str = "    liku   ";
console.log(str.trim());
// let password = prompt("Enter your password: ");
// console.log(password.trim());


// uppercase and tolowercase method
let str2 = "liku";
console.log(str2.toUpperCase());
// similarly we can change it to the owercase also
let str3 = "LIKU";
console.log(str3.toUpperCase());


// string methods with arguments
//  indexOf()

    let st = "I love cOding";
    console.log(st.indexOf(" "),
    console.log(st.indexOf("O"),
    console.log(st.indexOf("k"))))


// Method Chaining(order is left to right)
let msg = "hello";
console.log(msg.toUpperCase().trim());

// Slice
let msg2 = "HELLOILOVECODING";
console.log(msg2.slice(5));
console.log(msg2.slice(0,5));
console.log(msg2.slice(-2))

//  Replace
//     it will only change the first occurance of the string
// Example
let newMsg  = "college college college";
console.log(newMsg.replace("college", "school"));

let msg3= "ILOVECODING";
console.log(msg3.replace("LOVE", "doing"));
console.log()

// Repeat()
let msg4 = "Hello     ";
console.log(msg4.trim().repeat(10));

// splice:removes/ replace / add elements in place

// splice(start, deleteCount,item0......itemN)
let msg5 = [12,2232,33,454,44,343,"liku"];
console.log(msg5.splice(4));
console.log(ms)


let vv= "rrr";
console.log(typeof(vv));