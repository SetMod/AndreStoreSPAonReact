export default class Delivery {
    constructor(delivery) {
        this.Id = delivery.id;
        this.DeliveryType = delivery.deliveryType;
        this.Price = delivery.price;
        this.DeliveryTime = delivery.deliveryTime;
    }
}