/* Write a JavaScript program that takes in a number and generates
 a Pascal's Triangle with the specified number of rows. The program
  should output the triangle as an array of arrays, where each inner
   array represents a row of the triangle. */

   function triangle(row_num)
   {
    let triangle=[];
    for(let i=0; i<row_num; i++)
    {
        let arr=[];
        for(let j=0; j<i+1; j++)
        {
        if(j===0 || j===i)
        {
            arr.push(1);
        }
        else
        {
            let row_above=triangle[i-1];
            let sum=row_above[j]+row_above[j-1];
            arr.push(sum);
        }
    }
    triangle.push(arr);
}
    return triangle;
   }
   let n=6;
   let get = triangle(n);
   console.log(get);