import { Registration } from './registration';
import { Name } from './name';
import { Education } from './education';

export interface Personal{
    name: Name;
  email: string;
  phone: string;
  education: Education;
  summary: string;
}