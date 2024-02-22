// Logical operators are used to combine expressions
// `1) && (logical and operator)
// 2) || (Logical or operator)
// 3) !  (Logical not operator)`

// If we use more than one logical operator in the same conditional statement then the priority goes from left to right
// Example:
let score = 22;
if(score <=44 && score >100 || !false);

console.log("pass");


// Practice Question
// Q) A"good string" is a string that starts with the letter "a" and has a length>3. Write a Program to find if a string is good or not.
let strName = "a";
if(strName[0]==="a" && strName.length >3)
{
    console.log(`So ${strName} is a good string`);

}else
{
    console.log("it is not a good string");

}

// Q2)Predict the output
let num= 12;
if((num % 3 === 0) && (num+1 == 15) || (num-1 ==11))
{
    console.log("safe");

}
else
{
    console.log("unsafe");
    
}
