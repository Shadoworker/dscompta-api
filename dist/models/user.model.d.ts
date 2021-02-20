import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: string;
    type: string;
    function: string;
    email: string;
    customer_email: string;
    password: string;
    name?: string;
    surname?: string;
    is_active?: boolean;
    created_at?: Date;
    updated_at?: Date;
    companyId: string;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
