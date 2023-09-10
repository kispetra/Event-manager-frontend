import { Registration } from './registration';
import { SkillType } from './enum/skillType.enum';

export interface Experience {
  years: number;
  skills: string[];
  summary: string;
}