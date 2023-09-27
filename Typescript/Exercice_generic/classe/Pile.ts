export class Pile<T> {
  
    constructor(public objets: T[]) {
        this.objets = objets

    }

    add(value: T): void {
        this.objets.push(value)

    }

    delete(indextoremove: number): void {
        this.objets.splice(indextoremove, 1)
    }
}

