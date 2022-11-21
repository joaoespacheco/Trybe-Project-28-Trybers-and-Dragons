import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player01: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player01: Fighter, monsters: SimpleFighter[]) {
    super(player01);
    this._player01 = player01;
    this._monsters = monsters;
  }

  public get player01(): Fighter {
    return this._player01;
  }

  public get monsters(): SimpleFighter[] {
    return this._monsters;
  }

  private playerAttackMonsters(monstersAlive: SimpleFighter[]): void {
    this.player01.attack(monstersAlive[0]);
  }

  private monstersAttackPlayer(monstersAlive: SimpleFighter[]): void {
    monstersAlive.forEach((monster) => {
      if (this.player01.lifePoints > 0) {
        monster.attack(this._player01); 
      }
    });
  }

  public fight(): number {
    const { player01, monsters } = this;
    const monstersAlive = monsters.filter(({ lifePoints }) => lifePoints > 0);
    while (
      player01.lifePoints > 0
      && monsters.some(({ lifePoints }) => lifePoints > 0)
    ) {
      this.playerAttackMonsters(monstersAlive);
      this.monstersAttackPlayer(monstersAlive);
    }

    return super.fight();
  }
}

export default PVE;
