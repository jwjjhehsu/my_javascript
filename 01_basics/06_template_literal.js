// template literals
// They are used to add an embedded expressions to the string
// examples
let penPrice = 10;
let ereasorPrice = 5;
console.log("the total price is :", (penPrice+ereasorPrice), "rupees");
// IT CAN BE STORE INSIDE A SINGLE VARIABLE
// let output = "the final price is :" + (penPrice+ereasorPrice) + "rupees";

// if we want to 
let output = `the final total cost is : ${penPrice+ereasorPrice} rupees`
console.log(output);

