import { Progress } from './progress';
import { StatusType } from 'C:/Users/eetkisp/myapp/src/app/enum/statusType.enum';

export interface Flow {
  flow_id: number;
  progress: Progress;
  status: StatusType;
  comment: string;
}