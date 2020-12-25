import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { ComputedBillItem, ComputedBillItemRelations, ComputedBill } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { ComputedBillRepository } from './computed-bill.repository';
export declare class ComputedBillItemRepository extends DefaultCrudRepository<ComputedBillItem, typeof ComputedBillItem.prototype.id, ComputedBillItemRelations> {
    protected computedBillRepositoryGetter: Getter<ComputedBillRepository>;
    readonly computedBill: BelongsToAccessor<ComputedBill, typeof ComputedBillItem.prototype.id>;
    constructor(dataSource: DbDataSource, computedBillRepositoryGetter: Getter<ComputedBillRepository>);
}
