import { Entity } from '@loopback/repository';
import { ComputedBillItem } from './computed-bill-item.model';
export declare class ComputedBill extends Entity {
    id?: string;
    name?: string;
    no_ref?: number;
    from_name?: string;
    to_name?: string;
    to_id?: string;
    date?: string;
    to_address?: string;
    no_order?: number;
    deadline?: string;
    total?: number;
    items?: object[];
    logo?: string;
    signing?: string;
    type?: string;
    conditions?: string;
    status?: string;
    computedBillItems: ComputedBillItem[];
    companyId: string;
    constructor(data?: Partial<ComputedBill>);
}
export interface ComputedBillRelations {
}
export declare type ComputedBillWithRelations = ComputedBill & ComputedBillRelations;
