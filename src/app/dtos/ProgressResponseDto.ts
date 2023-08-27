import { FlowResponseDto } from './flowResponseDto';

export interface ProgressResponseDto{
    week_no: number,
    flowList: FlowResponseDto[]
}