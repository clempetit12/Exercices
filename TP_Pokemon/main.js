const apiUrl1 = "https://pokeapi.co/api/v2/pokemon/1";
const apiUrl2 = "https://pokeapi.co/api/v2/pokemon/2";
const apiUrl3 = "https://pokeapi.co/api/v2/pokemon/3";
const apiUrl4 = "https://pokeapi.co/api/v2/pokemon/4";

const img = document.querySelector("img")
let names = document.querySelector(".name")
let weights = document.querySelector(".weight")
let heights = document.querySelector(".height")

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

const fleche1 = document.getElementById("fleche1")
fleche1.addEventListener('click',(event) =>{
    console.log("bonjour");
    console.log(tabPokemon2[cpt-1]);
    console.log(tabPokemon2["image"]);
    img.src = `${tabPokemon2["image"][cpt-1]}`
    names.innerHTML=`${tabPokemon2[cpt--].toString}`
} )