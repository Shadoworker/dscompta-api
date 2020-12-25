import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { License } from '../models';
import { LicenseRepository } from '../repositories';
export declare class LicenseController {
    licenseRepository: LicenseRepository;
    constructor(licenseRepository: LicenseRepository);
    create(license: Omit<License, 'id'>): Promise<License>;
    count(where?: Where<License>): Promise<Count>;
    find(filter?: Filter<License>): Promise<License[]>;
    updateAll(license: License, where?: Where<License>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<License>): Promise<License>;
    updateById(id: string, license: License): Promise<void>;
    replaceById(id: string, license: License): Promise<void>;
    deleteById(id: string): Promise<void>;
}
