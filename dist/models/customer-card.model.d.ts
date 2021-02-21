import { Entity } from '@loopback/repository';
export declare class CustomerCard extends Entity {
    id?: string;
    data?: object;
    active?: boolean;
    constructor(data?: Partial<CustomerCard>);
}
export interface CustomerCardRelations {
}
export declare type CustomerCardWithRelations = CustomerCard & CustomerCardRelations;
