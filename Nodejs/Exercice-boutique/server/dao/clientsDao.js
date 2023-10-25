import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

export class ClientDao {
    constructor() {
        this.file = resolve("./data/clients.json")
        this.clients = []
    }


    readFileClient() {
        const file = readFileSync(this.file, { encoding: "utf-8" });
        this.clients = JSON.parse(file);
    }


    writeFileClient() {
        writeFileSync(this.file, JSON.stringify(this.clients));
    }


    getAll() {
        return this.clients;
    }

    save(client) {
        this.clients.push(client);
        this.writeFileClient();
        return client;
    }

    findById (id) {
       return this.clients.find(c => c.id === id )
    }


}