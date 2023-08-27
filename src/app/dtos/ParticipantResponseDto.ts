import { PersonalResponseDto } from './PersonalResponseDto';
import { ExperienceResponseDto } from './ExperienceResponseDto';
import { CommentResponseDto } from './CommentResponseDto';
import { ProgressResponseDto } from './ProgressResponseDto';

export interface ParticipantResponseDto {
  personal: PersonalResponseDto;
  experience: ExperienceResponseDto;
  score: number;
  comments: CommentResponseDto[];
  participation: boolean;
  kickoff: boolean;
  tshirt: string;
  gitlab: string;
  progress: ProgressResponseDto[];

}



