export enum Suits {
    hearts = "hearts",
    diamonds = "diamonds",
    clubs = "clubs",
    spades = "spades",
}
    
export enum CardTypes {
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    jack = "jack",
    queen = "queen",
    king = "king",
    ace = "ace",
}
    
export class Card {
    suit: string;
    cardType: string;
    constructor(suit: string, cardType: string) {
        this.suit = suit;
        this.cardType = cardType;
    }
}