import { Registration } from './registration';
import { SkillType } from 'C:/Users/eetkisp/myapp/src/app/enum/skillType.enum';

export interface Experience {
  experienceId: number;
  registration: Registration;
  years: number;
  skills: Array<SkillType>;
  repositoryUrl: string;
  summary: string;
}