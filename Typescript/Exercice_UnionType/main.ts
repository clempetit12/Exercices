import { Admin } from "./interfaces/Admin.js";
import { User } from "./interfaces/User.js";

type person = User | Admin

let personne1: User = {
    lastname : "Toto Dupont",
    age: 35,
    occupation: "Facteur"
}

let personne2: User = {
    lastname : "Toto Dupont",
    age: 35,
    occupation: "Facteur"
}

let personne3: User = {
    lastname : "Michel Michel",
    age: 23,
    occupation: "Lutteur"
}

let personne4: Admin = {
    lastname : "Michael Flich",
    age: 64,
    role: "Gérant"
}

let tabPerson: person[] = []

tabPerson.push(personne1,personne2,personne3,personne4)

console.log(` Nom : ${personne1.lastname} Age : ${personne1.age}` );
console.log(` Nom : ${personne2.lastname} Age : ${personne2.age}` );
console.log(` Nom : ${personne3.lastname} Age : ${personne3.age}` );
console.log(` Nom : ${personne4.lastname} Age : ${personne4.age}` );




