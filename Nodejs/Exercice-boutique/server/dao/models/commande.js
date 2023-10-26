export class Commande {
    constructor (client, produits) {
        this.id = Date.now(),
        this.client= client
        this.produits = produits

    }
}