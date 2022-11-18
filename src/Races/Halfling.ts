import Race from './Race';

class Halfling extends Race {
  private static _halflingCounter = 0;

  constructor(name: string, dexterity: number, public maxLifePoints = 60) {
    super(name, dexterity);
    Halfling._halflingCounter += 1;
  }

  public static createdRacesInstances() {
    return Halfling._halflingCounter;
  }
}

export default Halfling;