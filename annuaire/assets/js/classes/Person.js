export class Person {
    constructor(firstname, lastname, dateOfBirth, email, phoneNumber) {
        this._id = ++Person._count;
        this._firstname = firstname;
        this._lastname = lastname;
        this._dateOfBirth = dateOfBirth;
        this._email = email;
        this._phoneNumber = phoneNumber;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        if (value !== "Blabla") {
            this._firstname = value;
        }
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(value) {
        if (value !== "Blabla") {
            this._lastname = value;
        }
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(value) {
        if (value !== "Blabla") {
            this._dateOfBirth = value;
        }
    }
    get email() {
        return this._email;
    }
    set email(value) {
        if (value !== "Blabla") {
            this._email = value;
        }
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
Person._count = 0;
