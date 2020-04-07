import * as Card from "./Card";
import * as BaseTreasure from "../instances/BaseTreasure";
import * as BaseVictory from "../instances/BaseVictory";
import * as BaseKingdom from "../instances/BaseKingdom";
import * as Game from "./Game";

export class Player {
  //we expect drawPile & discardPile to act like a stack?
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
    this.initDrawPile();
    this.reset();
  }

  //getters
  public getDrawPile(): Array<Card.Card> {
    return this.drawPile;
  }

  public getGold(): number {
    return this.gold;
  }

  public getActions(): number {
    return this.actions;
  }

  public getHand(): Array<Card.Card> {
    return this.hand;
  }

  public getId(): number {
    return this.id;
  }

  public getBuys(): number {
    return this.buys;
  }

  //instance methods

  //generate unique id for Player
  //TODO: full rewrite
  private generateid(): number {
    return Math.floor(Math.random() * 1203964);
  }

  //initializes the hand for the Player
  private initDrawPile(): void {
    //add 7 copper
    for (let i = 0; i < 7; i++) {
      this.drawPile.push(new BaseTreasure.Copper());
    }
    //add 3 Estates
    for (let i = 0; i < 3; i++) {
      this.drawPile.push(new BaseVictory.Estate());
    }
    this.shuffle();
  }

  //resets actions and buys at the beginning of turn
  public reset(): void {
    this.actions = 1;
    this.buys = 1;
    this.gold = 0;
    this.draw(5);
    for (let card of this.hand) {
      if (Card.Card.isTreasure(card)) {
        this.gold += card.goldValue;
      }
    }
  }

  //shuffle drawPile
  public shuffle(): void {
    var curr = this.drawPile.length,
      temp,
      rand;
    while (0 !== curr) {
      //pick remaining element
      rand = Math.floor(Math.random() * curr);
      curr -= 1;

      //swap
      temp = this.drawPile[curr];
      this.drawPile[curr] = this.drawPile[rand];
      this.drawPile[rand] = temp;
    }
  }

  //draw any number of cards
  public draw(numCards: number): void {
    for (var i = 0; i < numCards; i++) {
      //if both Discard and DrawPiles are empty we exit
      if (this.drawPile.length == 0 && this.discardPile.length == 0) {
        return;
      }

      if (this.drawPile.length == 0) {
        //swap discard and drawPiles
        let temp = this.drawPile;
        this.drawPile = this.discardPile;
        this.discardPile = temp;
        this.shuffle();
      }

      // ! for non-null assertion
      this.hand.push(this.drawPile.pop()!);
    }
  }

  //add any number of actions
  public incActions(numActions: number): void {
    this.actions += numActions;
  }

  //TODO: write discard methods

  //mechanic for trashing cards
  //takes in array of indexes and then sends those cards to trash
  public trash(indexes: Array<number>, game: Game.Game): void {
    let tempTrash: Array<Card.Card> = [];

    //first sort the array
    indexes.sort((n1, n2) => n1 - n2);
    for (let i = indexes.length - 1; i >= 0; i--) {
      tempTrash.push(this.hand[i]);
      this.hand.splice(i, 1);
    }

    game.trash(tempTrash);
  }

  //TODO: write implementation
  public selectCardsfromHand(numCards: number): Array<number> {
    let selection: Array<number> = [];
    for (let i = 0; i < numCards; i++) {
      selection.push();
    }
  }

  //FOR TESTING PURPOSES ONLY
  public acquire(card: Card.Card) {
    let index = Math.floor(Math.random() * this.drawPile.length);
    this.drawPile[index] = card;
  }
}

let testCard = new BaseTreasure.Copper();
let testPlayer = new Player();
let testGame = new Game.Game();
testPlayer.acquire(new BaseKingdom.Cellar());
testPlayer.trash([0, 2], testGame);

console.log(testGame.getTrash());
