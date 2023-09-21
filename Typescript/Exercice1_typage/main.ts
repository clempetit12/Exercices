let userName: string = "Clémence";
let userAge: number = 30;
let isLogin: boolean = true;
let userNames = ["toto", "tata"]
userNames.push(userName)

console.log(userNames);

let person: object

person = {
    firstName: "Dupont",
    age: 20,
    isLoggedIn: true
}
console.log(person.age);

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

let person2 = {
    firstName: "Dupont",
     age: 20,
      isLoggedIn: true
}

console.log(person2.age);

let infos : [string, number]

