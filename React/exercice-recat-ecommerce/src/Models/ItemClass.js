class ItemClass {
    static count = 0
    constructor(title, details, price) {
        this.title = title
        this.details = details
        this.price = price
        this.id = ++ItemClass.count
    }
}

export default ItemClass