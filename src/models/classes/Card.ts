import { Player } from "./Player";

abstract class Card {
  private types: CardType[];
  private cost: number;

  constructor(types: CardType[], cost: number) {
    this.types = types;
    this.cost = cost;
  }
}

interface TreasureCard {
  goldValue: number;
}

interface VictoryCard {
  victoryPoints: number;
}

interface ActionCard {
  use(player: Player): void;
}

interface ReactionCard {
  react(player: Player): void;
}

interface CurseCard extends VictoryCard {}

interface AttackCard {
  attack(player: Player): void;
  attack(players: Player[]): void;
}

enum CardType {
  Action,
  Treasure,
  Victory,
  Reaction,
  Attack,
  Curse,
}

export {
  Card,
  TreasureCard,
  CardType,
  ActionCard,
  VictoryCard,
  ReactionCard,
  CurseCard,
  AttackCard,
};
