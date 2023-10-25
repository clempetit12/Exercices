export class Produit {
    constructor(name,price,stock) {
        this.name = name,
        this.price = price,
        this.stock = stock,
        this.id = Date.now()
    }
}