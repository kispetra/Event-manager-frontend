import { PersonalResponseDto } from './PersonalResponseDto';
import { ExperienceResponseDto } from './ExperienceResponseDto';
import { CommentResponseDto } from './CommentResponseDto';
import { ProgressResponseDto } from './ProgressResponseDto';
import { ParticipantResponseDto } from './ParticipantResponseDto';

export interface RegistrationResponseDto{
    personal: PersonalResponseDto;
    experience: ExperienceResponseDto;
    participant: ParticipantResponseDto;
    score: string;
    comment: CommentResponseDto[];
    motivation: String;
    participation: boolean;
}