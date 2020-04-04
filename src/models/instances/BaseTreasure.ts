import { Card, TreasureCard, CardType } from "../classes/Card";

class Copper extends Card implements TreasureCard {
  goldValue: number;

  constructor() {
    super([CardType.Treasure], 0, "Copper", "Value: 1 Gold \n Cost: 0 Gold");
    this.goldValue = 1;
  }
}

class Silver extends Card implements TreasureCard {
  goldValue: number;

  constructor() {
    super([CardType.Treasure], 3, "Silver", "Value: 2 Gold \n Cost: 3 Gold");
    this.goldValue = 2;
  }
}

class Gold extends Card implements TreasureCard {
  goldValue: number;

  constructor() {
    super([CardType.Treasure], 6, "Gold", "Value: 3 Gold \n Cost: 6 Gold");
    this.goldValue = 3;
  }
}

export { Copper, Silver, Gold };
