import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Warrior extends Archetype {
  private static count = 0;
  public energyType: EnergyType = 'stamina';

  constructor(name:string) {
    super(name);
    Warrior.count += 1;
  }

  public static createdArchetypeInstances():number {
    return Warrior.count;
  }
}

export default Warrior;