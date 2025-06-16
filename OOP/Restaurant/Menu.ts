import { MenuItem } from './MenuItem';

class Menu {
    menu: MenuItem[];
    constructor() {
        this.menu = [];
    }

    addMenuItem(menuItem: MenuItem) {
        this.menu.push(menuItem);
    }

    removeMenuItem(itemName: string) {
        const itemToRemove: MenuItem | undefined = this.menu.find((menuItem) => menuItem.itemName === itemName);
        if (itemToRemove) {
            const index = this.menu.indexOf(itemToRemove);
            this.menu.splice(index, 1);
        }
        else {
            console.log('This item is not in the menu');
        }
    }

    calculateAverageRating() {
        if (this.menu.length === 0) {
            return 0
        } 
        else {
            let totalRatings = 0;
            this.menu.forEach((menuItem) => totalRatings = totalRatings + menuItem.itemRating);
            return totalRatings/this.menu.length;
        }
    }
}

const burger = new MenuItem('burger', 19, 5);
const soup = new MenuItem('soup', 8, 2);
const chickenSalad = new MenuItem('chicken salad', 12, 4);

const menu = new Menu();
menu.addMenuItem(burger);
menu.addMenuItem(soup);
menu.addMenuItem(chickenSalad);

console.log(menu.menu);
menu.removeMenuItem('soup');
console.log(menu.menu);
console.log(menu.calculateAverageRating());
