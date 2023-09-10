import { Event } from './event';
import { Personal } from './personal';
import { Experience } from './experience';
import { Participant } from './participant';
import { Comment } from './comment';

export interface Registration{
    registrationId: number;
    personal: Personal;
    experience: Experience;
    motivation: string;
    score: number;
    comments: Comment[];
}