import { Step } from './Step';

export type GoalStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'FINISHED';

export interface Goal{
  id: string;
  title: string;
  description: string;
  totalXp: number;
  steps: Step[];
  status: GoalStatus;
  progression: number;
}
