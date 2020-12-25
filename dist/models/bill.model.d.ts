import { Entity } from '@loopback/repository';
export declare class Bill extends Entity {
    id?: string;
    uri?: string;
    name?: string;
    status?: string;
    type?: string;
    no_piece?: string;
    date?: Date;
    no_compte?: string;
    libelle?: string;
    ttc?: number;
    ht?: number;
    tva?: number;
    is_active?: boolean;
    is_archived?: boolean;
    is_exported?: boolean;
    created_at?: Date;
    updated_at?: Date;
    companyId: string;
    constructor(data?: Partial<Bill>);
}
export interface BillRelations {
}
export declare type BillWithRelations = Bill & BillRelations;
