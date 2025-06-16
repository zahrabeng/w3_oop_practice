import { Card, Suits, CardTypes } from './Card';

export class Deck {
    cards: Card[] = [];

    constructor() {
    const suits = Object.values(Suits);
    const cardTypes = Object.values(CardTypes);

    for (const suit of suits) {
        for (const type of cardTypes) {
            this.cards.push(new Card(suit, type));
        }
    }
}

    shuffleDeck() {
        let cardsCopy: Card[] = [...this.cards];
        let shuffledCards: Card[] = [];

        while (cardsCopy.length > 0) {
            const indexToRemove = Math.floor(Math.random() * cardsCopy.length);
            shuffledCards.push(cardsCopy.splice(indexToRemove, 1)[0]);
        }

        return shuffledCards;
    }
}