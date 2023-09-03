
import { Registration } from './registration';

export interface Event{
    eventId: number,
    name: String,
    description: String,
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