import { Flow } from './flow';
import { Participant } from './participant';

export interface Progress {
  id: number;
  week: number;
  flow: Flow[];
  participant: Participant;
}