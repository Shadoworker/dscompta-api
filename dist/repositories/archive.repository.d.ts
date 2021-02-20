import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Archive, ArchiveRelations, Company } from '../models';
import { CompanyRepository } from './company.repository';
import { UserRepository } from './user.repository';
export declare class ArchiveRepository extends DefaultCrudRepository<Archive, typeof Archive.prototype.id, ArchiveRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    protected companyRepositoryGetter: Getter<CompanyRepository>;
    readonly company: BelongsToAccessor<Company, typeof Archive.prototype.id>;
    constructor(dataSource: DbDataSource, userRepositoryGetter: Getter<UserRepository>, companyRepositoryGetter: Getter<CompanyRepository>);
}
