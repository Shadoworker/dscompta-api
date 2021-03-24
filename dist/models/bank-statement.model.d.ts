import { Entity } from '@loopback/repository';
export declare class BankStatement extends Entity {
    id?: string;
    filename?: string;
    month?: string;
    year?: string;
    date?: Date;
    data?: object;
    active?: boolean;
    companyId?: string;
    constructor(data?: Partial<BankStatement>);
}
export interface BankStatementRelations {
}
export declare type BankStatementWithRelations = BankStatement & BankStatementRelations;
