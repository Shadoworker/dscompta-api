import { Entity } from '@loopback/repository';
import { Bill } from './bill.model';
import { User } from './user.model';
export declare class Company extends Entity {
    id?: string;
    rcs: string;
    name: string;
    domain_name?: string;
    address: string;
    type: string;
    affiliatedId: string;
    owner_name?: string;
    owner_surname?: string;
    license: string;
    is_active?: boolean;
    has_owner?: boolean;
    config?: object;
    pack?: object;
    created_at?: Date;
    updated_at?: Date;
    exercise_year: number;
    users: User[];
    bills: Bill[];
    [prop: string]: any;
    constructor(data?: Partial<Company>);
}
export interface CompanyRelations {
}
export declare type CompanyWithRelations = Company & CompanyRelations;
