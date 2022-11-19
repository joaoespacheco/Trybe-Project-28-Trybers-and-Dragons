import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number = getRandomInt(1, 10);
  private _defense: number = getRandomInt(1, 10);
  private _dexterity: number = getRandomInt(1, 10);
  private _energy: Energy;

  constructor(name:string) {
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private set maxLifePoints(value: number) {
    if (value > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    } else {
      this._maxLifePoints = value;
    }
  }

  public get lifePoints() {
    return this._lifePoints;
  }

  private set lifePoints(value: number) {
    this._lifePoints = value;
  }

  public get strength(): number {
    return this._strength;
  }

  private set strength(value: number) {
    this._strength = value;
  }

  public get defense(): number {
    return this._defense;
  }

  private set defense(value: number) {
    this._defense = value;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  private set dexterity(value: number) {
    this._dexterity = value;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  private updateLifePoints(damage: number): number {
    const currentLife = this.lifePoints - damage;
    if (currentLife < 0) {
      this.lifePoints = -1;
      return -1;
    }
    this.lifePoints = currentLife;
    return currentLife;
  }

  public receiveDamage(attckPoints: number): number {
    const totalDamage = attckPoints - this.defense;
    if (totalDamage < 0) {
      return this.updateLifePoints(1);
    }
    return this.updateLifePoints(totalDamage);
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  public levelUp(): void {
    this.maxLifePoints += getRandomInt(1, 10);
    this.strength += getRandomInt(1, 10);
    this.defense += getRandomInt(1, 10);
    this.dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    this.lifePoints = this.maxLifePoints;
  }

  public special(enemy: Fighter): void {
    enemy.receiveDamage(this.strength + enemy.defense);
  }
}

export default Character;