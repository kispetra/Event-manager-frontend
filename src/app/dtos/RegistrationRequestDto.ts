import { PersonalResponseDto } from './PersonalResponseDto';
import { ExperienceResponseDto } from './ExperienceResponseDto';
import { ParticipantResponseDto } from './ParticipantResponseDto';

export interface RegistrationRequestDto{
    personal: PersonalResponseDto;
    experience: ExperienceResponseDto;
    participant: ParticipantResponseDto;
    motivation: String;
}