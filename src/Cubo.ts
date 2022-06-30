export abstract class Cubo {
  private resistencia: number;
  private hp: number;

  constructor(resistencia: number, hp: number) {
    this.resistencia = resistencia;
    this.hp = hp;
  }

  private destruir(): void {
    console.log("Cubo destruido");
    this.hp = 0;
  }

  public reducirHp(hp: number): number {
    if (hp > 0) {
      this.hp -= hp / this.resistencia;
    }
    if (this.hp <= 0) {
      this.destruir();
      return 0;
    }
    return this.hp;
  }

  get getHp(): number {
    return this.hp;
  }
}

export class CuboTierra extends Cubo {
  constructor(resistencia: number, hp: number) {
    super(resistencia, hp);
  }
}

export class CuboPiedra extends Cubo {
  constructor(resistencia: number, hp: number) {
    super(resistencia, hp);
  }
}
