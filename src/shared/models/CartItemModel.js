export default class CartItemModel {
    item = undefined;
    quantity = 1;

    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
    }

}