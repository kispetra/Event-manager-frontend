import { Event } from './event';
import { Mentor } from './mentor';
import { Participant } from './participant';

export interface Team {
  teamId: number;
  event: Event;
  name: string;
  mentors: Mentor[];
  members: Participant[];
}
