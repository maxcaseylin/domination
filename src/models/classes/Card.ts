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
  //required for interface type checks
  static isTreasure(object: any): object is TreasureCard {
    return "goldValue" in object;
  }

  static isVictory(object: any): object is VictoryCard {
    return "victoryPoints" in object;
  }

  static isAttack(object: any): object is AttackCard {
    return (<AttackCard>object).attack !== undefined;
  }

  static isReaction(object: any): object is ReactionCard {
    return (<ReactionCard>object).react !== undefined;
  }

  static isAction(object: any): object is ActionCard {
    return (<ActionCard>object).use !== undefined;
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
