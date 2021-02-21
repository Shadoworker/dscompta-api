import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { CustomerCard, CustomerCardRelations } from '../models';
export declare class CustomerCardRepository extends DefaultCrudRepository<CustomerCard, typeof CustomerCard.prototype.id, CustomerCardRelations> {
    constructor(dataSource: DbDataSource);
}
