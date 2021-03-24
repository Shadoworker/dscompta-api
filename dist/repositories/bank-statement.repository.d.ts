import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { BankStatement, BankStatementRelations } from '../models';
export declare class BankStatementRepository extends DefaultCrudRepository<BankStatement, typeof BankStatement.prototype.id, BankStatementRelations> {
    constructor(dataSource: DbDataSource);
}
