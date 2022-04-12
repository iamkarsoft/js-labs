// using set to add unique items to collection
const unique = new Set();

unique.add("Kofi Ramos");
unique.add("John Stones");
unique.add("Kofi Ramos");
unique.add("Hi");

console.log(unique);
// use delete to remove stuff from collections

const result = unique.delete("Hi");

console.log(result);
console.log(unique);

// check if collection contains item
console.log(unique.has("Kofi Ramos"));

// clear to remove all items in collection
console.log(unique.clear());
console.log(unique);

// example of using set

const products = [
  {
    title: "Shoe Rack",
    company: "Ikea",
  },
  {
    title: "Samsung galaxy s20",
    company: "Samsung",
  },
  {
    title: "Mac Book Pro",
    company: "Apple",
  },
];
// mapping / looping through companies
const companies = products.map((item)=>item.company);
console.log(companies)

const uniqueCompanies = new Set(companies);

console.log([...uniqueCompanies]);

// oneliner function

const oneLineCompany = [...new Set(products.map((item)=>item.company))]
console.log(oneLineCompany)



