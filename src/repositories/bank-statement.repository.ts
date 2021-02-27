import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {BankStatement, BankStatementRelations} from '../models';

export class BankStatementRepository extends DefaultCrudRepository<
  BankStatement,
  typeof BankStatement.prototype.id,
  BankStatementRelations
  > {


  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BankStatement, dataSource);
  }
}
