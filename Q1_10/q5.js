/* Write a JavaScript function that takes in an array of strings and returns 
   a new array containing only the strings that have more than five characters.*/

function ret(arr)
{
   let get="";
   for(let i=0; i<arr.length; i++)
   {
      if(arr[i].length>5)
         get+=" " + arr[i];
   }
   return get;
}

let arr=["java", "Python", "Javascript", "Compiler"];
console.log(`String With Length more than 5 are--> ${ret(arr)}`);