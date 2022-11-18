import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Mage extends Archetype {
  private static _count = 0;
  public energyType: EnergyType = 'mana';

  constructor(name:string) {
    super(name);
    Mage._count += 1;
  }

  public static createdArchetypeInstances():number {
    return Mage._count;
  }
}

export default Mage;