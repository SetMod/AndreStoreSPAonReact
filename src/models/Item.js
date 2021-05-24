export default class Item {
    constructor(item) {
        this.id = item.id;
        this.price = item.price;
        this.deliveryId = item.deliveryId;
        this.description = item.description;
        this.name = item.name;
        this.imagePath = item.imagePath;
        this.category = item.category;
        this.amount = item.amount;
    }
}