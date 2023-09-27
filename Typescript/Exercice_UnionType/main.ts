import { Admin } from "./interfaces/Admin.js";
import { User } from "./interfaces/User.js";

type Person = User | Admin

let personne1: User = {
    lastname : "Toto Dupont",
    age: 35,
    occupation: "Facteur"
}

let personne2: Admin = {
    lastname : "Jeanne DO",
    age: 35,
    role: "Admin"
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

let tabPerson: Person[] = []

 tabPerson.pop
 tabPerson.push(personne1,personne2,personne3,personne4)
 console.table(tabPerson);

 tabPerson.forEach(personne => console.log(` Nom : ${personne.lastname} Age : ${personne.age}` ))


tabPerson.forEach(personne => {
 let bonus = ("role" in personne) ? "Son occupation est : " + personne.role : "Son rôle est : " + personne.occupation ;
 console.log(bonus);
})
