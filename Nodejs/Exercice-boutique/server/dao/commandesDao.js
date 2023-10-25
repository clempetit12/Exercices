import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

export class CommandesDao {
    constructor() {
        this.file = resolve("./data/commandes.json")
        this.commandes = []
    }


    readFileCommandes() {
        const file = readFileSync(this.file, { encoding: "utf-8" });
        this.commandes = JSON.parse(file);
    }


    writeFileCommandes() {
        writeFileSync(this.file, JSON.stringify(this.commandes));
    }


    getAll() {
        return this.commandes;
    }

    save(commande) {
        this.commandes.push(commande);
        this.writeFileCommandes();
        return commandes;
    }

    findById (id) {
       return this.commandes.find(c => c.id === id )
    }


}