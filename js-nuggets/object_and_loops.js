
// Converting Objects into arrays

// Object.keys() convert properties names to arrays

const person = {
    name: "Kofi Ramos",
    age: 30,
    status: "Web Developer"
}

const keys = Object.keys(person);
console.log(Object.keys(keys));

// Object.values() convert properties value to arrays
 const values = Object.values(person);
 console.log(values);


 // Object.entries() convert boths
 const entries = Object.entries(person);
 console.log(entries)

 console.log(entries[0][0])



 // Mapping is iterating through content of an array

 const result = entries.map((item)=>{
     console.log(item[0]);
 })

 // using for of loop to iterate through arrays

 for(const item of entries){
     console.log(item[0]);
 }

 // for in loop to iterate though objects
 for(const stuff in person){
     console.log(`${stuff} : ${person[stuff]}`);
 }