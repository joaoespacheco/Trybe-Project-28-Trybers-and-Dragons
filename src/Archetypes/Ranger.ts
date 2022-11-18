import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Ranger extends Archetype {
  private static _count = 0;
  public energyType: EnergyType = 'stamina';

  constructor(name:string) {
    super(name);
    Ranger._count += 1;
  }

  public static createdArchetypeInstances():number {
    return Ranger._count;
  }
}

export default Ranger;