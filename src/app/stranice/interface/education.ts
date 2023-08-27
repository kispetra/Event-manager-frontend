import { Personal } from './personal';

export interface Education {
  educationId: number;
  personal: Personal;
  faculty: string;
  year: number;
}