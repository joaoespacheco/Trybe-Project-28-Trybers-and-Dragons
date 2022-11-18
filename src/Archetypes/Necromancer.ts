import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Necromancer extends Archetype {
  private static count = 0;
  public energyType: EnergyType = 'mana';

  constructor(name:string) {
    super(name);
    Necromancer.count += 1;
  }

  public static createdArchetypeInstances():number {
    return Necromancer.count;
  }
}

export default Necromancer;