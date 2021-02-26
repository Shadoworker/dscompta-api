import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {BankCard, BankCardRelations} from '../models';

export class BankCardRepository extends DefaultCrudRepository<
  BankCard,
  typeof BankCard.prototype.id,
  BankCardRelations
  > {


  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BankCard, dataSource);
  }
}
