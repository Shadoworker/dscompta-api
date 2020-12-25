import {DefaultCrudRepository} from '@loopback/repository';
import {License, LicenseRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LicenseRepository extends DefaultCrudRepository<
  License,
  typeof License.prototype.id,
  LicenseRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(License, dataSource);
  }
}
