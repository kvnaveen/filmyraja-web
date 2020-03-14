import { Results } from './results';

export interface Response{
    status: string,
    code: number,
    message: string,
    results: Results
}