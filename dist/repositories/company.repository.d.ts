import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Company, CompanyRelations, User, Bill, ComputedBill } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { UserRepository } from './user.repository';
import { BillRepository } from './bill.repository';
import { ComputedBillRepository } from './computed-bill.repository';
export declare class CompanyRepository extends DefaultCrudRepository<Company, typeof Company.prototype.id, CompanyRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    protected billRepositoryGetter: Getter<BillRepository>;
    protected computedBillRepositoryGetter: Getter<ComputedBillRepository>;
    readonly users: HasManyRepositoryFactory<User, typeof Company.prototype.id>;
    readonly bills: HasManyRepositoryFactory<Bill, typeof Company.prototype.id>;
    readonly computedBills: HasManyRepositoryFactory<ComputedBill, typeof Company.prototype.id>;
    constructor(dataSource: DbDataSource, userRepositoryGetter: Getter<UserRepository>, billRepositoryGetter: Getter<BillRepository>, computedBillRepositoryGetter: Getter<ComputedBillRepository>);
}
