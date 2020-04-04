import { Card, VictoryCard, CurseCard, CardType } from "../classes/Card";

class Estate extends Card implements VictoryCard {
  victoryPoints: number;

  constructor() {
    super([CardType.Victory], 2);
    this.victoryPoints = 1;
  }
}

class Duchy extends Card implements VictoryCard {
  victoryPoints: number;

  constructor() {
    super([CardType.Victory], 5);
    this.victoryPoints = 3;
  }
}

class Province extends Card implements VictoryCard {
  victoryPoints: number;

  constructor() {
    super([CardType.Victory], 8);
    this.victoryPoints = 6;
  }
}

class Curse extends Card implements CurseCard, VictoryCard {
  victoryPoints: number;

  constructor() {
    super([CardType.Curse], 0);
    this.victoryPoints = -1;
  }
}

export { Estate, Duchy, Province, Curse };
