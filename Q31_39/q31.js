 /*Write a JavaScript function called divideNumbers that takes two numbers as parameters
 and divides the first number by the second number. However, if the second number is zero,
 the function should throw a custom error with the message "Cannot divide by zero!".
 Use a try and catch block to handle the error and display an appropriate error message.
 Your task is to implement the divideNumbers function using try and catch to handle the error condition.
 If the division is successful, the function should return the result of the division. 
 If an error occurs, the function should return null. Write the code for the divideNumbers function 
 and test it with different inputs to ensure it handles the error correctly. */

let divideNumbers=(n1, n2)=>
{
    try{
        if(n2!=0)
        {
            return (n1/n2);
        }
        else{
            throw Error("Cannot divide by zero!");
            
        }
    }
    catch(err)
    {
        console.log(err);
        return null;
    }
} 

let n1=10;
let n2=0;
console.log(divideNumbers(n1,n2));
console.log("Program Still Runnuing");