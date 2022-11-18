import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Mage extends Archetype {
  private static count = 0;
  public energyType: EnergyType = 'mana';

  constructor(name:string) {
    super(name);
    Mage.count += 1;
  }

  public static createdArchetypeInstances():number {
    return Mage.count;
  }
}

export default Mage;