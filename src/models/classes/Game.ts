import * as Card from "./Card";
import * as Player from "./Player";

export class Game {
  private trashPile: Array<Card.Card> = [];

  public getTrash() {
    return this.trashPile;
  }

  public trash(tempTrash: Array<Card.Card>) {
    //.concat returns a new array
    this.trashPile = this.trashPile.concat(tempTrash);
  }
}
