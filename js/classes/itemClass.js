let idCount = 0;
class Item {
    constructor(name, price, amount){
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.id = idCount++;
    }
}

export default Item;