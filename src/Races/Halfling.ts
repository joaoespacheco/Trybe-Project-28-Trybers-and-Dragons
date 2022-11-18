import Race from './Race';

class Halfling extends Race {
  private static _count = 0;

  constructor(name: string, dexterity: number, public maxLifePoints = 60) {
    super(name, dexterity);
    Halfling._count += 1;
  }

  public static createdRacesInstances() {
    return Halfling._count;
  }
}

export default Halfling;