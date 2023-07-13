/* Write a JavaScript function that takes in a number and checks
  if it is a prime number. Return true if it is, and false otherwise. */

let chk=(num)=>
{
    let get=true;
    if(num<=2)
        return get=false;

    for(let i=2 ; i<= num / 2; i++)
    {
        if(num%i===0)
        get=false;
    }
    return get;
}

let num=4;
console.log(`Number ${num} is Prime--> ${chk(num)} `);