export class Vehicle {
    constructor(plaqueImmatriculation,date){
    this.plaqueImmatriculation = plaqueImmatriculation
    this.date = date

}
display() {
    return `${this.plaqueImmatriculation}`
}

}