import * as Card from "./Card";

export class Player {
  //we expect drawPile to act like a stack?
  private drawPile: Card.Card[];
  private discardPile: Card.Card[];
  private hand: Card.Card[];
  private id: number;
  private actions: number;
  private gold: number;
  private buys: number;

  constructor() {
    this.drawPile = [];
    this.discardPile = [];
    this.hand = [];
    this.id = this.generateid();
    this.gold = 0;
    this.actions = 0;
    this.buys = 0;
    this.reset();
  }

  //instance methods

  //generate unique id for Player
  //TODO: full rewrite
  private generateid(): number {
    return Math.floor(Math.random() * 1203964);
  }

  //resets actions and buys at the beginning of turn
  public reset(): void {
    this.actions = 1;
    this.buys = 1;
    this.gold = 0;
    for (let card of this.hand) {
      if (Card.Card.isTreasure(card)) {
        this.gold += card.goldValue;
      }
    }
  }

  //shuffle drawPile
  public shuffle(): void {
    var currentIndex = this.hand.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      //pick remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      //swap
      temporaryValue = this.hand[currentIndex];
      this.hand[currentIndex] = this.hand[randomIndex];
      this.hand[randomIndex] = temporaryValue;
    }
  }
}
