/* Write a JavaScript function that takes an object as a parameter and uses a for...in loop
 to display all the key-value pairs in the object. */

 let display= (obj)=>{
    for (const obj_key in obj) {
        console.log(`The Key value of ${obj_key} in Object is--> ${obj[obj_key]}`);
        }
}

const obj={
    Name: 'Abdul',
    Age: 21,
    Degree: 'Bsc(IT)'
}
display(obj);