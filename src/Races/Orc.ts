import Race from './Race';

class Orc extends Race {
  private static _orcCounter = 0;

  constructor(name: string, dexterity: number, public maxLifePoints = 74) {
    super(name, dexterity);
    Orc._orcCounter += 1;
  }

  public static createdRacesInstances() {
    return Orc._orcCounter;
  }
}

export default Orc;