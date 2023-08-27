import { SkillType } from 'C:/Users/eetkisp/myapp/src/app/enum/skillType.enum';

export interface ExperienceResponseDto {
    years: number;
    skills: SkillType[];
    repositoryUrl: string;
    summary: string;
}