import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Bill, BillRelations, Company } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { UserRepository } from './user.repository';
import { CompanyRepository } from './company.repository';
export declare class BillRepository extends DefaultCrudRepository<Bill, typeof Bill.prototype.id, BillRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    protected companyRepositoryGetter: Getter<CompanyRepository>;
    readonly company: BelongsToAccessor<Company, typeof Bill.prototype.id>;
    constructor(dataSource: DbDataSource, userRepositoryGetter: Getter<UserRepository>, companyRepositoryGetter: Getter<CompanyRepository>);
}
