"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var Card_1 = require("./Card");
var Deck = /** @class */ (function () {
    function Deck() {
        this._cards = [];
        for (var _i = 0, suits_1 = Card_1.suits; _i < suits_1.length; _i++) {
            var suit = suits_1[_i];
            for (var _a = 0, ranks_1 = Card_1.ranks; _a < ranks_1.length; _a++) {
                var rank = ranks_1[_a];
                this._cards.push(new Card_1.Card(rank, suit));
            }
        }
    }
    Deck.prototype.shuffle = function () {
        for (var i = 0; i < this._cards.length; i++) {
            var rand = Math.floor(Math.random() * this._cards.length);
            var temp = this._cards[i];
            this._cards[i] = this._cards[rand];
            this._cards[rand] = temp;
        }
    };
    Deck.prototype.draw = function () {
        return this._cards.pop();
    };
    Deck.prototype.isEmpty = function () {
        return !this._cards.length;
    };
    Deck.prototype.numberOfCardsLeft = function () {
        return this._cards.length;
    };
    Object.defineProperty(Deck.prototype, "cards", {
        get: function () {
            return this._cards;
        },
        set: function (value) {
            this._cards = value;
        },
        enumerable: false,
        configurable: true
    });
    return Deck;
}());
exports.Deck = Deck;
