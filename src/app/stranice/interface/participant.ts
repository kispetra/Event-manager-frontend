import { Registration } from './registration';

import { Progress } from './progress';

export interface Participant {
  participantId: number;
  personal: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    education: {
      faculty: string;
      year: number;
    };
    summary: string;
  };
  experience: {
    years: number;
    skills: string[];
    summary: string;
  };
  score: number;
  comments: Comment[]; 
  participation: boolean;
  progress: Progress[];
}