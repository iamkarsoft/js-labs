// check if item exists in Array

const breakfast = ["bread","eggs","milk","butter"];

let ingredient = 'bread';

// this returns true if it exists in array or false when it doesn't 
console.log(breakfast.includes(ingredient));


// Using conditional statement with array includes

if(breakfast.includes(ingredient)){
    console.log(`it's in the list of ingredients`);
}else{
    console.log(`you need to buy some`);
}



