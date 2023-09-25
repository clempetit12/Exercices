//question 1 : Créer une variable « userName » qui n’accepte qu’un type string et l’initialiser avec la valeur de votre choix.
let userName: string = "Clémence";

//question 2 : Créer une variable « userAge » qui n’accepte que les numbers et l’initialiser avec la valeur de votre choix.
let userAge: number = 30;

//question 3 : Créer une variable « isLogin » qui n’accepte que les types booleans et l’initialiser avec la valeur de votre choix.
let isLogin: boolean = true;

//question 4: Créer une variable « userNames » qui est un Array de strings. Ensuite, effectuer un push de la variable « userName » et ensuite console.log de la variable « userNames »
let userNames : Array<string> = []
userNames.push(userName)

console.log(userNames);


//question 5: Créer une variable « person » qui ne peut être qu’un objet. Via l’indicateur de valeur « object », sans définir le contenu de l’objet. Ensuite, avec les propriétés suivantes :
//firstName: "Dupont"
//age: 20 isLoggedIn: true
//Est-il possible d'afficher la valeur age via console.log

let person: object

person = {
    firstName: "Dupont",
    age: 20,
    isLoggedIn: true
}

//console.log(person.age);// non


//question 6: Créer une variable « person1 » qui ne peut être qu’un objet. Préciser le type objet via attribution (assignation) tout en indiquant les propriétés suivantes :
let person1: {
    firstName: string,
    age: number,
    isLoggedIn: boolean
} = {
    firstName: "Dupont",
    age: 20,
    isLoggedIn: true
}
console.log(person1.age);


//question 7: Créer une variable « person1 » qui ne peut être qu’un objet. Préciser le type objet via attribution (assignation) tout en indiquant les propriétés suivantes :
let person2 = {
    firstName: "Dupont",
     age: 20,
      isLoggedIn: true
}

console.log(person2.age);


//question 8: Créer une variable « infos » qui ne peut être qu’un Tuple de seulement 2 valeurs. string et number dans cet ordre-là!
let infos : [string, number]

