/*Write a JavaScript function that takes in an array of numbers and
 returns the second smallest number in the array.*/
 
function get_sno(arr)
{
    let s1=Infinity;
    let s2=Infinity;
    if(arr.length < 2)
    return undefined;

    for(let i=0; i<arr.length  ; i++)
    {
        if (arr[i] < s1) {
            s2 = s1;
            s1 = arr[i];
          } 
          else if (arr[i] < s2 && arr[i] !== s1) {
            s2 = arr[i];
          }
    }
    return s2;
}

let arr=[23, 43, 76, 4, 8, 33];
console.log(`Second Smallest no is: ${get_sno(arr)}`);