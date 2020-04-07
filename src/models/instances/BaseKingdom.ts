import { Player } from "../classes/Player";
import { Card, CardType, ActionCard, ReactionCard } from "../classes/Card";

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
  }
}

export class Chapel extends Card implements ActionCard {
  constructor() {
    super(
      [CardType.Action],
      2,
      "Chapel",
      "Trash up to 4 cards from your hand."
    );
  }

  use(player: Player): void {
    //TODO: write trash upto 4.
  }
}

export class Moat extends Card implements ActionCard, ReactionCard {
  constructor() {
    super(
      [CardType.Action, CardType.Reaction],
      2,
      "Moat",
      "When another player plays an Attack card, you may first reveal this from your hand, to be unaffected by it."
    );
  }

  use(player: Player): void {
    player.draw(2);
  }

  react(player: Player): void {
    //unaffected by attack
  }
}

export class Harbringer extends Card implements ActionCard {
  constructor() {
    super(
      [CardType.Action],
      3,
      "Harbringer",
      "+1 Card \n +1 Action \n Look through your discard pile. You may put a card from it onto your deck."
    );
  }

  use(player: Player): void {
    player.draw(1);
    player.incActions(1);
    //Look through discard pile.
    console.log(player.getDrawPile);
    //we need to pick a card.
  }
}
