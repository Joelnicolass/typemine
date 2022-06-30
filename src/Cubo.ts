export abstract class Cubo {
  private resistencia: number;
  private hp: number;

  constructor(resistencia: number, hp: number) {
    this.resistencia = resistencia;
    this.hp = hp;
  }

  private destruir(): void {
    console.log("Cubo destruido");
  }

  public reducirHp(hp: number): void {
    if (hp > 0) {
      this.hp -= hp / this.resistencia;
    }
    if (this.hp <= 0) {
      this.destruir();
    }
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
