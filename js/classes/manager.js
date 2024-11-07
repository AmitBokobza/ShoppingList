import Item from "./itemClass.js"

class ManageItems{
    constructor(){
        this.items = [];
    }
    addItem(name, price, amount){
        this.items.push(new Item(name, price, amount))
    };
    deleteItem(id){
        this.items = this.items.filter((item) => item.id != id);
    };
};

export default ManageItems;