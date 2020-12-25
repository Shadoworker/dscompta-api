import { DefaultCrudRepository } from '@loopback/repository';
import { License, LicenseRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class LicenseRepository extends DefaultCrudRepository<License, typeof License.prototype.id, LicenseRelations> {
    constructor(dataSource: DbDataSource);
}
