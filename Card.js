class Card{
    constructor(points, suits) {
        this.point = points;
        this.suit = suits;
    }
    getImageUrl() {
        return `images/${this.point}_of_${this.suit}.png`;
    }
}

let myCard = new Card(5, 'diamonds');

console.log(myCard.point);
console.log(myCard.suit);
console.log(myCard.getImageUrl());