import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

export class ProduitDao {
    constructor() {
        this.file = resolve("./data/produits.json")
        this.produits = []
    }


    readFileProduit() {
        const file = readFileSync(this.file, { encoding: "utf-8" });
        this.produits = JSON.parse(file);
    }


    writeFileProduit() {
        writeFileSync(this.file, JSON.stringify(this.produits));
    }


    getAll() {
        return this.produits;
    }

    save(produit) {
        this.produits.push(produit);
        this.writeFileProduit();
        return produit;
    }
    
    findById (id) {
        return this.produits.find(p => p.id === id )
     }


}