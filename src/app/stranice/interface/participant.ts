import { Registration } from './registration';
import { Team } from './team';
import { Progress } from './progress';

export interface Participant {
  participantId: number;
  email: string;
  registration: Registration;
  team: Team;
  progress: Array<Progress>;
}