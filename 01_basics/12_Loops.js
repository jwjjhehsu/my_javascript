// For loop 
// Syntax: for(initialization; condition, updaton)
//     do something
// }


// for(let i  =1;i<=5;i++)
// {
//     console.log(i);
//     // printing all even numbers from 2 to 10

// }

for(let i  = 2; i <=10;i++)
{
    if(i%2==0)
    {
        console.log(i);

    }
}
// Lets create an infinite loop
// for(let j = 1;j>=0;j++)
// {
//     console.log(j);
// }


console.log("Printing the multiplication of 5");
let num  =5;
for(let k = 1;k<=10;k++)
{
    console.log(num+ "X" + k + " = "+ num*k);

}
console.log("It can be also done by : ");


for(let o = 5;o<=50;o = o+5)
{
    console.log(o);

}

// Lets learn about the nested loops
// Program to print the rectangular star pattern
// for(let m = 0;m<5;m++)
// {
//     console.log("outer loop"+ m);
//     for(let n = 0;n<=5;n++)
//     {
//         console.log("*");

//     }
// }


// for (let m = 0; m < 5; m++) {
//     let row = "";
//     for (let n = 0; n < 5; n++) {
//         row += "* ";
//     }
//     console.log(row);
// }


// Array Traversal using loops 
let arr = ["mango","orange","papaya","apple","grapes"];
for(let i = 0;i<arr.length;i = i +2)
{
    console.log(i,arr[i]);
}