export class Pile {
    constructor(objets) {
        this.objets = objets;
        this.objets = objets;
    }
    add(value) {
        this.objets.push(value);
    }
    delete(indextoremove) {
        this.objets.splice(indextoremove, 1);
    }
}
