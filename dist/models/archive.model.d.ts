import { Entity } from '@loopback/repository';
export declare class Archive extends Entity {
    id?: string;
    files?: object;
    created_at?: Date;
    updated_at?: Date;
    companyId: string;
    constructor(data?: Partial<Archive>);
}
export interface ArchiveRelations {
}
export declare type ArchiveWithRelations = Archive & ArchiveRelations;
