class Contact {
    static count = 0

    constructor (firstname, lastname, email, phoneNumber) {
        this.firstname = firstname
        this.lastname= lastname
        this.email= email
        this.phonenumber = phoneNumber
        this.id = ++Contact.count
    }

}

export default Contact