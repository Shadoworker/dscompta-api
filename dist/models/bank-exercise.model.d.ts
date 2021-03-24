import { Entity } from '@loopback/repository';
export declare class BankExercise extends Entity {
    id?: string;
    year?: string;
    closed?: boolean;
    companyId?: string;
    constructor(data?: Partial<BankExercise>);
}
export interface BankExerciseRelations {
}
export declare type BankExerciseWithRelations = BankExercise & BankExerciseRelations;
