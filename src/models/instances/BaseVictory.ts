import { Card, VictoryCard, CurseCard, CardType } from "../classes/Card";

class Estate extends Card implements VictoryCard {
  victoryPoints: number;

  constructor() {
    super([CardType.Victory], 2, "Estate", "1 Victory Point \n Cost: 2 Gold");
    this.victoryPoints = 1;
  }
}

class Duchy extends Card implements VictoryCard {
  victoryPoints: number;

  constructor() {
    super([CardType.Victory], 5, "Duchy", "3 Victory Points \n Cost: 5 Gold");
    this.victoryPoints = 3;
  }
}

class Province extends Card implements VictoryCard {
  victoryPoints: number;

  constructor() {
    super(
      [CardType.Victory],
      8,
      "Province",
      "6 Victory Points \n Cost: 8 Gold"
    );
    this.victoryPoints = 6;
  }
}

class Curse extends Card implements CurseCard, VictoryCard {
  victoryPoints: number;

  constructor() {
    super([CardType.Curse], 0, "Curse", "-1 Victory Point \n Cost: 0 Gold");
    this.victoryPoints = -1;
  }
}

export { Estate, Duchy, Province, Curse };
