import { Registration } from './registration';

import { Progress } from './progress';

export interface Participant {
  email: string;
  progress: Array<Progress>;
}