export class Person {
    private static _count: number = 0
    private _id: number;
    private _firstname: string;
    private _lastname: string;
    private _dateOfBirth: Date;
    private _email: string;
    private _phoneNumber: string;

    constructor(firstname: string, lastname: string, dateOfBirth: string, email: string, phoneNumber: string,) {
        this._id = ++Person._count
        this._firstname = firstname
        this._lastname = lastname
        this._dateOfBirth = new Date(dateOfBirth)
        this._email = email
        this._phoneNumber = phoneNumber

    }
    get firstname() {
        return this._firstname
    }

    set firstname(value: string) {
        if (value !== "Blabla") {
            this._firstname = value
        }
    }
    get lastname() {
        return this._lastname
    }

    set lastname(value: string) {
        if (value !== "Blabla") {
            this._lastname = value
        }
    }
    get dateOfBirth() {
        return this._dateOfBirth
    }

    set dateOfBirth(value: Date) {
         
            this._dateOfBirth = value
    
    }
    get email() {
        return this._email
    }

    set email(value: string) {
        if (value !== "Blabla") {
            this._email = value
        }
    }
    get phoneNumber() {
        return this._phoneNumber
    }

    set phoneNumber(value: string) {

        this._phoneNumber = value
    }
    get id() {
        return this._id
    }

    set id(value: number) {

        this._id = value
    }
}

