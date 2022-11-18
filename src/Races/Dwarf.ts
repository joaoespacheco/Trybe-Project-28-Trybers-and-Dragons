import Race from './Race';

class Dwarf extends Race {
  private static _dwarfCounter = 0;

  constructor(name: string, dexterity: number, public maxLifePoints = 80) {
    super(name, dexterity);
    Dwarf._dwarfCounter += 1;
  }

  public static createdRacesInstances() {
    return Dwarf._dwarfCounter;
  }
}

export default Dwarf;