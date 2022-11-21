import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  private set lifePoints(value: number) {
    if (value < 1) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = value;
    }
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attckPoints: number): number {
    if (attckPoints > 0) {
      const currentLife = this.lifePoints - attckPoints;
      this.lifePoints = currentLife;
    }
    return this.lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;