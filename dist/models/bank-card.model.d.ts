import { Entity } from '@loopback/repository';
export declare class BankCard extends Entity {
    id?: string;
    name?: string;
    url?: string;
    username?: string;
    password?: string;
    active?: boolean;
    companyId?: string;
    constructor(data?: Partial<BankCard>);
}
export interface BankCardRelations {
}
export declare type BankCardWithRelations = BankCard & BankCardRelations;
