// If eslse
// nested if-else
// switch
console.log("Before my if statement:");

let age = 23;
if(age<=18)
{
    console.log("you are elligible for the voting.");

}console.log("After my if statement:");

let userName = "aman";
if(userName == "sradha")
{
    console.log(`welcome ${userName} to the website`)

}
// Assignment -1
// Q) Create a traffic light system  that shows what to do based on color
let color = "red";
// Traffic light system
if(color == "red")
{
    console.log("stop !SIGNAL IS RED");

}

if(color == "green")
{
    console.log("go ! SIGNAL IS GREEN");

}
if(color == "yellow")
{
    console.log("Please weight! SIGNAL IS YELLOW");

}

// some major logic for if or else if condition
// for the previous traffic light condition where we use only the if condition for each time it will check all the condition irrespective of their similarities
// Example
let userAge = 23;
if(userAge >= 18)
{
    console.log(`user whose age is ${userAge}elligible for voting and driving`)
}
if(userAge >= 18)
{
    console.log(`user whose age is ${userAge}elligible for voting and driving`)
}
if(userAge >= 18)
{
    console.log(`user whose age is ${userAge}elligible for voting and driving`)
}
if(age>=75)
{
    console.log("the user is unable for these working");
}

// AS THE condition is satisfying still each condition is check for each time

//  But if we use else if ladder
let age_is = 22;
if(age >= 18)
{
    console.log("he is able to vote");

}else if(age >=18)
{
    console.log("he is also able to vote");

}else if(age >70)
{
    console.log("he is not able to vote");

}
// If we see here the after the condition is satisfied for the first checking it is not going to check for the other conditions


// Lets learn about the if-else 
let isRaining = true;
if(isRaining == true)
{
    console.log("the match will be stopped");

}
else{
    console.log("the match will be held");

}


// Assignment-2
// Q2) Create a system to calculate popcorn prices based on the size customer asked for 
let size  = "S";
if(size == "XL")
{
    console.log(`for ${size}you have to pay  RS.250 rupees`)
}
else if(size == "L")
{
    console.log(`for ${size}you have to pay  RS.200 rupees`)
}else if(size == "M")
{
    console.log(`for ${size}you have to pay RS.100 rupees`);
}else if(size == "S")
{
    console.log(`for ${size} size you have to pay RS.50 rupees`);
}else
{
    console.log("Please give a valid sizing .")
}


// If-else Nesting
//   Nesting is writi8ng if-else statements.
//  it can have many levels.
let marks = 45;
if(marks>=33)
{
    if(marks>=88)
    {
        console.log("o");
    }else
    {
        console.log("A");
    }
}else
{
    console.log("Better luck next time");

}



// ASSIGNMENT -3
// Q) lets create a calculator using conditional to check whether a studentr is passed or failed also  so his grade
let mark = 100
if(mark >=33)
{
    console.log("Congrants you have passed in the exam!");
    if(mark >=90 && mark<=100)
    {
        console.log("And you have got a grade : O");
    }
   else if(mark >=80 && mark<=90)
    {
        console.log("And you have got a grade : A");
    }
    else if(mark >=70 && mark<=80)
    {
        console.log("And you have got a grade : B");
    }
    else if(mark >=60 && mark<=70)
    {
        console.log("And you have got a grade : C");
    }else if(mark >=50 && mark<=60)
    {
        console.log("And you have got a grade : D");
    }else
    {
        console.log(`you have got ${mark}, SO try to do your best for the next time`);

    }
}
else
{
    console.log("Better luck next time. !🤓")
}


// Remember the concept of truthy and falsy
if(true)
{
    console.log("it has the true value ");

}else
{
    console.log("it has the false value.");

}


// Similarly
/*
1) false for following
-> false, 0, -0, "",On, null, undefined;
2) true for everything else
*/



// Switch statement
//   It is used when we have some values that we need to compare to.
let colour = "red";
switch(colour)
{
    case "red":
        {
            console.log("STOP ! as the signal is red");
            break;

        }
        case "green":
            {
                console.log("GO! as the signal is green");
                break;
                
            }
            case "red":
                {
                    console.log("WAIT ! as the signal is yellow");
                    break;
                    
                }
               default:
                {
                    console.log("Broken light.")
                }
}