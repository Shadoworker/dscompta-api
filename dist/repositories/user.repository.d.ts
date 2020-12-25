import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { User, UserRelations, Company } from '../models';
import { BillRepository } from './bill.repository';
import { CompanyRepository } from './company.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected billRepositoryGetter: Getter<BillRepository>;
    protected companyRepositoryGetter: Getter<CompanyRepository>;
    readonly company: BelongsToAccessor<Company, typeof User.prototype.id>;
    constructor(dataSource: DbDataSource, /*@repository.getter('InterventionRepository') protected interventionRepositoryGetter: Getter<InterventionRepository>,*/ billRepositoryGetter: Getter<BillRepository>, /*@repository.getter('InterventionRepository') protected interventionRepositoryGetter: Getter<InterventionRepository>,*/ companyRepositoryGetter: Getter<CompanyRepository>);
}
