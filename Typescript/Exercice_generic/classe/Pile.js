export class Pile {
    constructor(objets) {
        this.objets = objets;
    }
    add(value) {
        this.objets.push(value);
    }
    delete(indextomremove) {
        this.objets.splice(indextomremove, 1);
    }
}
