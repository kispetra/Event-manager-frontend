
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
    registrations: Array<Registration>
    showDetails?: boolean;
}