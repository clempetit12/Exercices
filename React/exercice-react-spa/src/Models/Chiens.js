class Dog {
    constructor (name, race, date, id=Date.now()) {
       
        this._name = name;
        this._race = race;
        this._age = date;
        this._id = id
        
    }

    get Id (){
        return this._id
    }
    get Name() {
        return this._name
    }
    get Race() {
        return this._race
    }
    get Age() {
        return this._age
    }
}

export default Dog