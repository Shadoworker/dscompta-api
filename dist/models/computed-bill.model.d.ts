import { Entity } from '@loopback/repository';
import { ComputedBillItem } from './computed-bill-item.model';
export declare class ComputedBill extends Entity {
    id?: string;
    name?: string;
    no_ref?: number;
    from_name?: string;
    bill_from_address?: string;
    bill_from_tel?: number;
    bill_from_mail?: string;
    bill_from_city?: string;
    bill_from_zipcode?: number;
    to_name?: string;
    bill_to_address?: string;
    bill_to_tel?: number;
    bill_to_mail?: string;
    bill_to_city?: string;
    bill_to_zipcode?: number;
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
    companyDesc?: string;
    status?: string;
    legal?: string;
    computedBillItems: ComputedBillItem[];
    companyId: string;
    constructor(data?: Partial<ComputedBill>);
}
export interface ComputedBillRelations {
}
export declare type ComputedBillWithRelations = ComputedBill & ComputedBillRelations;
