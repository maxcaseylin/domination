import { Card, TreasureCard, CardType } from "../classes/Card";

class Copper extends Card implements TreasureCard {
  goldValue: number;

  constructor() {
    super([CardType.Treasure], 0);
    this.goldValue = 1;
  }
}

class Silver extends Card implements TreasureCard {
  goldValue: number;

  constructor() {
    super([CardType.Treasure], 2);
    this.goldValue = 3;
  }
}

class Gold extends Card implements TreasureCard {
  goldValue: number;

  constructor() {
    super([CardType.Treasure], 3);
    this.goldValue = 6;
  }
}

export { Copper, Silver, Gold };
