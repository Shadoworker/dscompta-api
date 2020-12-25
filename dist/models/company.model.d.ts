import { Entity } from '@loopback/repository';
import { User } from './user.model';
import { Bill } from './bill.model';
export declare class Company extends Entity {
    id?: string;
    rcs: string;
    name: string;
    address: string;
    type: string;
    owner_name?: string;
    owner_surname?: string;
    license: string;
    is_active?: boolean;
    has_owner?: boolean;
    users: User[];
    bills: Bill[];
    [prop: string]: any;
    constructor(data?: Partial<Company>);
}
export interface CompanyRelations {
}
export declare type CompanyWithRelations = Company & CompanyRelations;
