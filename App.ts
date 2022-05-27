import { Deck } from './Deck'
import { Card } from './Card'
import * as promptSync from 'prompt-sync';

export class App
{
    private _deck: Deck;

    constructor()
    {
        this._deck = new Deck();
        this._deck.shuffle();
    }

    drawOneCard(): Card
    {
        return this._deck.draw();
    }

    drawHand(): Card[]
    {
        let hand = [];
        for(let i = 0; i < 5; i++){
            hand.push(this.drawOneCard());
        }
        
        return hand;
    }
}

const prompt = promptSync();
let app = new App();
let quit = false;

while(!quit){
    let answer = prompt('Draw one [C]ard or draw a new [H]and or [Q]uit: ').toUpperCase();

    switch(answer)
    {
        case 'C':
            let card = app.drawOneCard();
            console.log(card.name);
            break;
        case 'H':
            let hand = app.drawHand();
            hand.forEach(card => {
                console.log(card.name)
            });
            break;
        case 'Q':
            quit = true;
            break;
    }
}




