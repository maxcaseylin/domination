import { Player } from "./Player";

abstract class Card {
  private types: CardType[];
  private cost: number;
  private repl: string;
  private description: string;

  constructor(types: CardType[], cost: number, repl: string, desc: string) {
    this.types = types;
    this.cost = cost;
    this.repl = repl;
    this.description = desc;
  }

  toString() {
    return this.repl;
  }

  //instanceOf methods
  static isTreasure(object: any): object is TreasureCard {
    return "goldValue" in object;
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
