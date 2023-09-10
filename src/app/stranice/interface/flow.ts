import { Progress } from './progress';
import { StatusType } from './enum/statusType.enum';

export interface Flow {
  flow_id: number;
  progress: Progress;
  status: StatusType;
  comment: string;
}