import { Experience } from './experience';
import { SkillType } from 'C:/Users/eetkisp/myapp/src/app/enum/skillType.enum';

export interface Skill {
  skillId: number;
  experience: Experience;
  skillType: SkillType;
}

