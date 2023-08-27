import { Event } from './event';
import { Personal } from './personal';
import { Experience } from './experience';
import { Participant } from './participant';

export interface Registration{
    registrationUUID: string;
    event: Event;
    personal: Personal;
    experience: Experience;
    participant: Participant;
    score: number;
    comment: Array<Comment>;
    motivation: string;
    preferredOs: string;
    participation: boolean;
    kickoff: boolean;
    tshirt: string;
    gitlab: string;
}