"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.suits = exports.ranks = void 0;
exports.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
exports.suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        this._rank = rank;
        this._suit = suit;
        this._value = exports.ranks.indexOf(rank) + 2;
    }
    Card.prototype.isHigherThan = function (card) {
        return this._value > card._value;
    };
    Object.defineProperty(Card.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "suit", {
        get: function () {
            return this._suit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "name", {
        get: function () {
            return this._rank + ' of ' + this._suit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    return Card;
}());
exports.Card = Card;
