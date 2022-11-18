import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Ranger extends Archetype {
  private static count = 0;
  public energyType: EnergyType = 'stamina';

  constructor(name:string) {
    super(name);
    Ranger.count += 1;
  }

  public static createdArchetypeInstances():number {
    return Ranger.count;
  }
}

export default Ranger;