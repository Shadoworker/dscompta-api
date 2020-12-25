import { Entity } from '@loopback/repository';
export declare class License extends Entity {
    id?: string;
    is_used?: boolean;
    constructor(data?: Partial<License>);
}
export interface LicenseRelations {
}
export declare type LicenseWithRelations = License & LicenseRelations;
