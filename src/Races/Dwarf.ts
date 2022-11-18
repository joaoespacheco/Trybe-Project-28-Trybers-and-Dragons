import Race from './Race';

class Dwarf extends Race {
  private static _count = 0;

  constructor(name: string, dexterity: number, public maxLifePoints = 80) {
    super(name, dexterity);
    Dwarf._count += 1;
  }

  public static createdRacesInstances() {
    return Dwarf._count;
  }
}

export default Dwarf;