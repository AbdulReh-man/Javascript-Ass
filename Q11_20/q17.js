/* Write a JavaScript function that takes in an array of objects 
representing products (each object has properties for name, price,
and quantity) and calculates the total value of all the products.*/

function cal_total(obj)
{
    let total=0
    for(let i=0; i<product.length; i++)
    {
        total+=obj[i].Price*obj[i].Quantity;
    }
    return total;
}

let product=[
    {
        name:"Dairy Milk",  Price: 300 ,  Quantity: 100
    },
    {
        name:"Twitch Chips",  Price: 40 ,  Quantity: 70
    },
    {
        name:"Masala Lays",  Price: 100 ,  Quantity: 150
    }
];

console.log(`Total Value of all products is--> ${cal_total(product)} $`);
