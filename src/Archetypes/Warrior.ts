import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Warrior extends Archetype {
  private static _count = 0;
  public energyType: EnergyType = 'stamina';

  constructor(name:string) {
    super(name);
    Warrior._count += 1;
  }

  public static createdArchetypeInstances():number {
    return Warrior._count;
  }
}

export default Warrior;