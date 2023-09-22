export class Student {
    constructor(name, firstname) {
        this.id = new Date().getTime().toString()
        this.name = name;
        this.firstname = firstname;

    }
}