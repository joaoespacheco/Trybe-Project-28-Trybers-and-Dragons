import Race from './Race';

class Orc extends Race {
  private static _count = 0;

  constructor(name: string, dexterity: number, public maxLifePoints = 74) {
    super(name, dexterity);
    Orc._count += 1;
  }

  public static createdRacesInstances() {
    return Orc._count;
  }
}

export default Orc;