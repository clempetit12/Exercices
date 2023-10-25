export class Client {
    constructor(firstname,lastname,phoneNumber) {
        this.firstname = firstname,
        this.lastname = lastname,
        this.phoneNumber = phoneNumber
        this.id = Date.now()
    }
}