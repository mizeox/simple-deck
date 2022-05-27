"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var Deck_1 = require("./Deck");
var promptSync = require("prompt-sync");
var App = /** @class */ (function () {
    function App() {
        this._deck = new Deck_1.Deck();
        this._deck.shuffle();
    }
    App.prototype.drawOneCard = function () {
        return this._deck.draw();
    };
    App.prototype.drawHand = function () {
        var hand = [];
        for (var i = 0; i < 5; i++) {
            hand.push(this.drawOneCard());
        }
        return hand;
    };
    return App;
}());
exports.App = App;
var prompt = promptSync();
var app = new App();
var quit = false;
while (!quit) {
    var answer = prompt('Draw one [C]ard or draw a new [H]and or [Q]uit: ').toUpperCase();
    switch (answer) {
        case 'C':
            var card = app.drawOneCard();
            console.log(card.name);
            break;
        case 'H':
            var hand = app.drawHand();
            hand.forEach(function (card) {
                console.log(card.name);
            });
            break;
        case 'Q':
            quit = true;
            break;
    }
}
