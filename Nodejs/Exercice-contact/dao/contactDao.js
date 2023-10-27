import { resolve } from "path";
import { readFileSync, writeFileSync } from "fs";

export default class ContactDao {
  constructor() {
    this.file = resolve("./data/contacts.json")
    this.contacts = []
  }

readFile() {
    const file = readFileSync(this.file, { encoding: "utf-8" });
    this.contacts = JSON.parse(file);
}


writeFile() {
    writeFileSync(this.file, JSON.stringify(this.contacts));
}


getAll() {
    return this.contacts;
}

save(customer) {
    this.contacts.push(customer);
    this.writeFile();
    return customer;
}

findById (id) {
   return this.contacts.find(c => c.id === id )
}

updateContact(contactUpdate) {
  const contact = this.findById(contactUpdate.id);
  if (contact == undefined) {
    return false;
  }
  contact.firstname = contactUpdate.firstname;
  contact.lastname = contactUpdate.lastname;
  contact.email = contactUpdate.email;
  

  this.writeFile();
  return true;
}

deleteContact(id) {
  this.contacts = this.contacts.filter((c) => c.id !== id);
  this.writeFile();
}
}