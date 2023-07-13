/* Write a JavaScript function that takes in a string and returns 
the reverse of the string without using any built-in reverse functions. */


let st_rev = (st)=>
{
    let add= '';
    for(let i=st.length - 1 ; i>=0 ; i--)
    {
        add+=st[i];
    }
    return add;
}

let str="Hello,      abdul";
console.log(`Reverse is= ${st_rev(str)}`);