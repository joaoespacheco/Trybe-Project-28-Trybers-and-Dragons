import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player01: Fighter;
  private _player02: Fighter;

  constructor(player01: Fighter, player02: Fighter) {
    super(player01);
    this._player01 = player01;
    this._player02 = player02;
  }

  public get player01(): Fighter {
    return this._player01;
  }

  public get player02(): Fighter {
    return this._player02;
  }

  public fight():number {
    while (
      this.player01.lifePoints > 0 && this.player02.lifePoints > 0
    ) {
      this._player01.attack(this._player02);
      this._player02.attack(this._player01);
    }

    return super.fight();
  }
}

export default PVP;
