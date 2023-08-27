import { Registration } from './registration';

export interface Comment{
    commentId: number;
    registration: Registration;
    score: string;
    comment: string;
}