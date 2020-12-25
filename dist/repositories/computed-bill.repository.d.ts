import { DefaultCrudRepository, HasManyRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { ComputedBill, ComputedBillRelations, ComputedBillItem, Company } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { ComputedBillItemRepository } from './computed-bill-item.repository';
import { CompanyRepository } from './company.repository';
export declare class ComputedBillRepository extends DefaultCrudRepository<ComputedBill, typeof ComputedBill.prototype.id, ComputedBillRelations> {
    protected computedBillItemRepositoryGetter: Getter<ComputedBillItemRepository>;
    protected companyRepositoryGetter: Getter<CompanyRepository>;
    readonly computedBillItems: HasManyRepositoryFactory<ComputedBillItem, typeof ComputedBill.prototype.id>;
    readonly company: BelongsToAccessor<Company, typeof ComputedBill.prototype.id>;
    constructor(dataSource: DbDataSource, computedBillItemRepositoryGetter: Getter<ComputedBillItemRepository>, companyRepositoryGetter: Getter<CompanyRepository>);
}
