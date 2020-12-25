import { Entity } from '@loopback/repository';
export declare class ComputedBillItem extends Entity {
    id?: string;
    qty?: number;
    name?: string;
    unit_price?: number;
    total_ht?: number;
    taxe?: number;
    computedBillId: string;
    constructor(data?: Partial<ComputedBillItem>);
}
export interface ComputedBillItemRelations {
}
export declare type ComputedBillItemWithRelations = ComputedBillItem & ComputedBillItemRelations;
