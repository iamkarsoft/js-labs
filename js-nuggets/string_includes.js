// used to check if a string contain some characters

// check with a simple string
const fullName = "Romain Kofi Amoussou";

const result = fullName.includes("Romain");

// checking with an object

const product = {
  title: "Gaming Pad",
};

const result_obj = product.title.includes("Gaming Pad");

// check in an array for it
const searchWord = 'a';

const games = [{ title: "COD" }, { title: "GTA" }, { title: "Fifa" },];

const gamesFiltering = games.filter((game)=>
    game.title.toLowerCase().includes(searchWord))

console.log(gamesFiltering);
