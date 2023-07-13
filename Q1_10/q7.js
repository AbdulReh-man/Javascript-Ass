/* Write a JavaScript function that takes in a string and counts
  the number of vowels (a, e, i, o, u) in the string. */
  let count=(str)=>
  {
    let c=0;
    for(let i=0; i<str.length; i++)
    {
      if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" )
      c++;
    }
    return c;
  }

let str="Hello How are you";
console.log(`${count(str)}`);