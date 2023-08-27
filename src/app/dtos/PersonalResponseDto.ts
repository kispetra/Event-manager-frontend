import { NameResponseDto } from './NameResponseDto';
import { EducationResponseDto } from './EducationResponseDto';

export interface PersonalResponseDto {
  name: NameResponseDto;
  email: string;
  phone: string;
  education: EducationResponseDto;
  summary: string;
}