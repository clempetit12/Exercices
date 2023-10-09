class Cheetah {
    static CheetahCount  = 0 
    constructor (name, taxonomy, characteristics,locations) {
        this.name = name
        this.taxonomy = taxonomy
        this.characteristics = characteristics
        this.locations = locations
        this.id = ++Cheetah.CheetahCount
    }

}

export default Cheetah