import { Registration } from './registration';
import { Name } from './name';
import { Education } from './education';

export interface Personal{
    personalId: number;
    registration: Registration;
    name: Name;
    email: string;
    phone: string;
    education: Education;
    summary: string;
}