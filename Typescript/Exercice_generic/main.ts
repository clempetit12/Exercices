import { Pile } from "./classe/Pile.js";

let objet1: Pile<string>

objet1 = new Pile (["toto"])

objet1.add("lili")
objet1.add("lola")

console.table(objet1);

objet1.delete(1)

console.table((objet1));


let pile2 = new Pile ([42])
pile2.add (43)
console.table(pile2);

pile2.add(45)
console.table(pile2);

pile2.delete(2)
console.table(pile2);

let boolean = new Pile<boolean>([])

boolean.add(true)
