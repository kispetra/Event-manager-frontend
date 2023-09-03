import { Event } from './event';
import { Personal } from './personal';
import { Experience } from './experience';
import { Participant } from './participant';

export interface Registration{
    personal: Personal;
    experience: Experience;
    motivation: string;
}