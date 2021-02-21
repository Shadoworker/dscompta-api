import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {CustomerCard, CustomerCardRelations} from '../models';

export class CustomerCardRepository extends DefaultCrudRepository<
  CustomerCard,
  typeof CustomerCard.prototype.id,
  CustomerCardRelations
  > {


  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CustomerCard, dataSource);
  }
}
