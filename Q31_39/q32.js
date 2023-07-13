 /* Write a JavaScript function called findLargestElement that takes an array
  of numbers as a parameter and returns the largest element in the array. 
  However, if the input is not an array or if the array is empty, the function 
  should throw a custom error with the message "Invalid input: please provide 
  a non-empty array!". Use a try and catch block to handle the error and display
 an appropriate error message.Your task is to implement the findLargestElement 
 function using try and catch to handle the error condition. If the array is valid 
 and contains elements, the function should return the largest element. 
 If an error occurs, the function should return null. */

 let findLargestElement=(arr)=>
 {
    let pre=0;
    try {
        if(arr.length!=0 && Array.isArray(arr))
        {
            arr.forEach((number) => {
               if(pre<=number)
               {
               pre=number;
               }
            });
            return pre;
        }
        else{
            throw new Error("Invalid input: please provide a non-empty array!");
        }
    } catch (error) {
        console.log(error);
        return null;
    }
 }
 let arr=[1,4,2,6,45,5,8,6,4];
 console.log("The Largest number in Array is: ",findLargestElement(arr));