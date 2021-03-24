import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { BankCard, BankCardRelations } from '../models';
export declare class BankCardRepository extends DefaultCrudRepository<BankCard, typeof BankCard.prototype.id, BankCardRelations> {
    constructor(dataSource: DbDataSource);
}
