export class Pico {
  private fuerza: number;
  constructor(fuerza: number) {
    this.fuerza = fuerza;
  }

  get getFuerza(): number {
    return this.fuerza;
  }
}
