import { recipes } from "./assets/ts/data/recipes.js"


let preparationTime = document.getElementById("preparationTime") as HTMLLabelElement
let cookingTime = document.getElementById("cookingTime") as HTMLLabelElement
let search = document.getElementById("search") as HTMLInputElement
let ingredientsIndex = document.getElementById("ingredients") as HTMLSelectElement
let filter = document.getElementById("filter") as HTMLButtonElement
let recettes = document.getElementById("recettes") as HTMLDivElement
<<<<<<< HEAD


=======
let modal = document.getElementById("modal") as HTMLDivElement
let titre = document.getElementById("titre") as HTMLDivElement
let ingredientModal = document.getElementById("ingredientModal") as HTMLDivElement
let instructionModal = document.getElementById("instruction") as HTMLDivElement
let closeModalButon = document.getElementById("closeModalButon") as HTMLDivElement
let preparations = document.getElementById("preparations") as HTMLDivElement
let tempsDeCuisson = document.getElementById("tempsDeCuisson") as HTMLInputElement
let valeurAffichee1 = document.getElementById("valeurAffichee1") as HTMLElement
let valeurAffichee2 = document.getElementById("valeurAffichee2") as HTMLElement
let tempsDePreparation = document.getElementById("tempsDePreparation") as HTMLInputElement
>>>>>>> cca22663f3ad7e408346ab6df1d60743013c7f04

interface Recipe {
    id?: string;
    name: string;
    servings: number;
    prepTime: string;
    cookTime: string;
    ingredients: {
        name: string;
        amount: string;
    }[];
    instructions: string[];
}

let tabRecipes: Recipe[] = []
let selectedRecipe = tabRecipes[0];



for (const key in recipes) {
    if (recipes.hasOwnProperty.call(recipes, key)) {
        const element = recipes[key];
        tabRecipes.push(element)
    }
<<<<<<< HEAD
  
    const ingredient = tabRecipes.map(el => el.ingredients)
const ingredients = ingredient.find(el =>el == )
/*     window.addEventListener('load', function() {
      console.log("hello");
      for (let i=0; i<tabRecipes.length; i++) {
        for (let j=0; j<ingredient.length; j++) {
          console.log(ingredient[i][j].name);
        }
        
    };}) */
/* 
    tabRecipes.forEach(ingredients => {
      ingredients.forEach((fileItem: {name: string, amount: string}, index: number) => {
        console.log(fileItem.name);
      })
    })
  */
 
  
       
            window.addEventListener('load', function() {
                tabRecipes.forEach(element => {
                  createBouton(element)    
                });
               tabRecipes.forEach(element => {
                    chargerListeIngredients(element)
                  });
            })


    function createBouton (element: Recipe) {
      console.log(element.id);
        let button = document.createElement('button')
        button.type = 'button';
        button.innerHTML=`${element.name} <hr>` 
        button.innerHTML +=`<i class="bi bi-egg-fried"></i>${element.cookTime}  <i class="bi bi-fire"></i>${element.prepTime}  ` 
        button.className = "btn btn-outline-light btn-lg btn-block text-center"
        button.id = `${element.id}`
        recettes.appendChild(button);

        
    }

function chargerListeIngredients (element: Recipe ) {
console.log("charger");
let option = document.createElement('option')
option.innerHTML = `${element.ingredients[0] }` 
ingredientsIndex.appendChild(option)
=======
>>>>>>> cca22663f3ad7e408346ab6df1d60743013c7f04
}


console.table(tabRecipes);

//Chargemnt à 'ouverte de la page des recettes 
window.addEventListener('load', function () {
    console.log("object");
    tabRecipes.forEach(element => {
        createBouton(element)
    });
})

//Fonction pour créer les boutons
function createBouton(element: Recipe) {
    let button = document.createElement('button')
    button.type = 'button';
    button.innerHTML = `${element.name} <hr>`
    button.className = element === selectedRecipe ? "btn btn-light w-100 my-2" : "btn btn-outline-light w-100 my-2";
    button.innerHTML += `<i class="bi bi-egg-fried"></i>${element.cookTime}  <i class="bi bi-fire"></i>${element.prepTime} `
    recettes.appendChild(button);
    button.addEventListener('click', () => {
        selectedRecipe = element;
        console.log(selectedRecipe);
        modal.style.display = "block"
        titre.innerHTML = element.name
        instructionModal.innerHTML = `${element.instructions}`
        afficherIngredients()
        afficherInstructions()
  });
    }


console.table(selectedRecipe);

//Affichage ingrédient dans la liste
tabRecipes.forEach(element => {
    const ingredientsList = element.ingredients;
    console.log(ingredientsList.forEach(element => {
        let option = document.createElement('option')
        option.innerHTML = `${element.name}`
        ingredientsIndex.appendChild(option)
    }));

});


//Croix pour fermer la modal 
closeModalButon.addEventListener('click', () => {
    modal.style.display = "none"
    
})

  
  // Fonction pour afficher les ingrédients
  function afficherIngredients() {
    ingredientModal.innerHTML = '';
    selectedRecipe.ingredients.forEach(element => {
        const ingredientsList = element.name
        const quantite = element.amount
        const listItem = document.createElement("li");
        listItem.textContent = ` ${ingredientsList} : ${quantite}`
        ingredientModal.appendChild(listItem)

})
  }

  function afficherInstructions () {
preparations.innerHTML = '';
const tempsPreparation = selectedRecipe.prepTime
const tempsCuisson = selectedRecipe.cookTime
preparations.innerHTML = `<p> Temps de préparation<i class="bi bi-fire"></i> : ${tempsPreparation} </p>`
preparations.innerHTML += `<p> Temps de préparation<i class="bi bi-egg-fried"></i> : ${tempsCuisson} </p>`
  }

  const tempsCuisson = tabRecipes.map(el => el.cookTime)
  console.table(tempsCuisson);
  
  
  
//Filtre preparation time et cooking time : je dois faire une fonction pour factoriser 
console.table(tempsCuisson);
const tempsCuissonSansDoublons = Array.from(new Set(tempsCuisson))
const tempsCuissonFormate = tempsCuissonSansDoublons.sort()
console.table(tempsCuissonSansDoublons);

tempsDeCuisson.addEventListener("input", function() {
    const indiceSelectionne: number = Number(tempsDeCuisson.value);
    const valeurSelectionnee =tempsCuissonFormate[indiceSelectionne]
    valeurAffichee2.textContent = valeurSelectionnee
  });
//Formatage de mon tableau temps de cuisson
const tempsPreparation = tabRecipes.map(el => el.prepTime)
console.table(tempsPreparation);
const tempsPreparationSansDoublons = Array.from(new Set(tempsPreparation))
const tempsPreparationFormate = tempsPreparationSansDoublons.sort()
console.table(tempsPreparationFormate); 

//Chargement des valeurs dans mon input temps de preparation
tempsDePreparation.addEventListener("input", function() {
    const indiceSelectionne: number = Number(tempsDePreparation.value);
    const valeurSelectionnee =tempsPreparationFormate[indiceSelectionne]
    valeurAffichee1.textContent = valeurSelectionnee
  })

  //Affichage des recettes en fonction temps de preparation
  tempsDePreparation.addEventListener('click', ()=> {
    updateRecettes()
  })
//Affichage des recettes en fonction temps de cuisson
  tempsDeCuisson.addEventListener('click', ()=> {
    updateRecettes()
  })
 
  const ingredientsList = tabRecipes.map(el => el.ingredients )
  console.table(ingredientsList);

  function updateRecettes() {
const selecteurprepTime = Number(tempsDePreparation.value)
const selecteurcookTime = Number(tempsDeCuisson.value)
const ingredientSelectionne = ingredientsIndex.value
console.log(tempsCuissonFormate[selecteurcookTime]);
console.log(tempsPreparationFormate[selecteurprepTime]);
const recetteFiltree = tabRecipes.filter(function(recette) {
    return ((recette.prepTime == tempsPreparationFormate[selecteurprepTime]) && (recette.cookTime == tempsCuissonFormate[selecteurcookTime])  )
} )
recettes.innerHTML = ' '
recetteFiltree.forEach(element => {
    createBouton(element)
});

  }


  //Recherche moteur de recherche en fonction des premières lettres tapées et par rapport aux recettes 
  search.addEventListener("input", function() {
    const motsCles = search.value.toLowerCase();
    console.log(motsCles);
    const recettesFiltrees = tabRecipes.filter(recette => {
        const nomRecette = recette.name.toLowerCase();
        return nomRecette.startsWith(motsCles);})
        recettes.innerHTML = ' '
recettesFiltrees.forEach(element => {
    createBouton(element)
    })
  })




//fonctionnalité bouton pour réinitialiser les input range 
  filter.addEventListener('click', ()=> {
reinitialiser()
  })
  function reinitialiser() {
recettes.innerHTML
tabRecipes.forEach(element => {
    createBouton(element)
});

  }

  //filtrer par rapport aux ingrédients 

ingredientsIndex.addEventListener('click', () => {
    const ingredientSelectionne = ingredientsIndex.value
    console.log(ingredientSelectionne);
    const recetteFiltree = tabRecipes.filter(recette => {
     return  recette.ingredients.some(ingredient => {
        return ingredient.name == ingredientSelectionne
     } )
    })
    console.log(recetteFiltree);
     recettes.innerHTML = ' '
     recetteFiltree.forEach(element => {
         createBouton(element)

    })
    
    
})
