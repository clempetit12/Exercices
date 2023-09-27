export class Pile<T> {
    objets: [T];


    constructor(objets: [T]) {
        this.objets = objets

    }

    add(value: T) {
        this.objets.push(value)

    }

    delete(indextomremove: number) {
        this.objets.splice(indextomremove, 1)
    }
}

