import { Team } from './team';
import { Registration } from './registration';

export interface Event{
    eventId: number | null;
    name: String;
    description: String;
    teams: Array<Team>,
    maxParticipants: number,
    registrationsNotBefore: Date,
    registrationsNotAfter: Date,
    confirmationNotAfter: Date,
    startDate: Date,
    weeks: number,
    invitesSent: boolean,
    divided: boolean,
    registrations: Array<Registration>
    showDetails?: boolean;
}