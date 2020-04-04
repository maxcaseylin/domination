import { Card } from "./Card";

export class Player {
  private drawPile: Card[];
  private discardPile: Card[];
  private hand: Card[];

  constructor() {
    this.drawPile = [];
    this.discardPile = [];
    this.hand = [];
  }
}
