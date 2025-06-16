export class MenuItem {
    itemName: string;
    itemPrice: number;
    itemRating: number;
    constructor(itemName: string, itemPrice: number, itemRating: number) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemRating = itemRating;
    }
};