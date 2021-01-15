import Card from './Card'

class Hand { 
    constructor(){
        this.hand = hand;
    }


}

let myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));
myHand.getPoints();

class Deck extends Hand {
    constructor(hand, suit, point) {
        super(hand, suit, point )
    }

    
}