import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Necromancer extends Archetype {
  private static _count = 0;
  public energyType: EnergyType = 'mana';

  constructor(name:string) {
    super(name);
    Necromancer._count += 1;
  }

  public static createdArchetypeInstances():number {
    return Necromancer._count;
  }
}

export default Necromancer;