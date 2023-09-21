const apiUrl1 = "https://pokeapi.co/api/v2/pokemon/1";
const apiUrl2 = "https://pokeapi.co/api/v2/pokemon/2";
const apiUrl3 = "https://pokeapi.co/api/v2/pokemon/3";
const apiUrl4 = "https://pokeapi.co/api/v2/pokemon/4";

const img = document.querySelector("img")
let names = document.querySelector(".name")
let weights = document.querySelector(".weight")
let heights = document.querySelector(".height")
let surprise = document.getElementById("surprise")
const fleche2 = document.getElementById("fleche2")
const fleche1 = document.getElementById("fleche1")

let tabPokemon = [apiUrl1,apiUrl2,apiUrl3,apiUrl4]
let tabPokemon2 = []
let cpt = tabPokemon.length-1
console.log(tabPokemon);

tabPokemon.forEach(element => {
    fetch(element)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`La requete a echoue avec un statut ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      let image = data.sprites.front_default
      let name = data.name
      let weight = data.weight
      let height = data.height
      tabPokemon2.push({"image":image, "name": name, "weight": weight, "height": height })
      console.table(tabPokemon2);
      img.src = `${data.sprites.front_default }`
      names.innerHTML = name
      weights.innerHTML = weight
      heights.innerHTML = height
  
    })
    .catch((error) => {
      console.error("une erreur : " + error);
    });
  

    
});

let min = 0
let max = tabPokemon.length-1
console.log(min);
console.log(max);

//Fonction appliquée au bouton avant 

fleche1.addEventListener('click',(event) =>{
  if (cpt == min){
    cpt = max
  } else {
cpt --
  }
    img.src = `${tabPokemon2[cpt]["image"]}`
    names.innerHTML = `${tabPokemon2[cpt]["name"]}`
    weights.innerHTML = `${tabPokemon2[cpt]["weight"]}`
    heights.innerHTML = `${tabPokemon2[cpt]["height"]}`
    

    
} )
//Fonction appliquée au bouton après

fleche2.addEventListener('click',(event) =>{
  if (cpt == max){
    cpt = min
  } else {
cpt ++
  }
    img.src = `${tabPokemon2[cpt]["image"]}`
    names.innerHTML = `${tabPokemon2[cpt]["name"]}`
    weights.innerHTML = `${tabPokemon2[cpt]["weight"]}`
    heights.innerHTML = `${tabPokemon2[cpt]["height"]}`
    

    
} )

//Fonction appliquée au bouton surprise
surprise.addEventListener('click',(event) =>{
let randomNumber = getRandomInt(max)
while (cpt == randomNumber ) {
  randomNumber = getRandomInt(max)

}
cpt = randomNumber
    img.src = `${tabPokemon2[cpt]["image"]}`
    names.innerHTML = `${tabPokemon2[cpt]["name"]}`
    weights.innerHTML = `${tabPokemon2[cpt]["weight"]}`
    heights.innerHTML = `${tabPokemon2[cpt]["height"]}`
  
} )

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
