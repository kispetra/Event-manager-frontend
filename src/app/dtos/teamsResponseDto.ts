import { MentorResponseDto } from 'C:/Users/eetkisp/myapp/src/app/dtos/MentorResponseDto';
import { ParticipantResponseDto } from 'C:/Users/eetkisp/myapp/src/app/dtos/ParticipantResponseDto';

export interface TeamsResponseDto {
    name: string;
    mentors: MentorResponseDto[];
    members: ParticipantResponseDto[];
}  