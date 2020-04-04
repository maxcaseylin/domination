import { Player } from "../classes/Player";
import { Card, CardType, ActionCard } from "../classes/Card";

export class Cellar extends Card implements ActionCard {
  constructor() {
    super(
      [CardType.Action],
      2,
      "Cellar",
      "+1 Action \n Discard any number of cards, then draw that many."
    );
  }

  use(player: Player): void {
    player.incActions(1);
    //TODO: write discard method. Discard as many cards from hand, then draw as many cards.
    player.incActions(-1);
  }
}
