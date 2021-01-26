import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Archive, ArchiveRelations, Company} from '../models';
import {CompanyRepository} from './company.repository';
import {UserRepository} from './user.repository';

export class ArchiveRepository extends DefaultCrudRepository<
  Archive,
  typeof Archive.prototype.id,
  ArchiveRelations
  > {


  public readonly company: BelongsToAccessor<Company, typeof Archive.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('CompanyRepository') protected companyRepositoryGetter: Getter<CompanyRepository>,
  ) {
    super(Archive, dataSource);
    this.company = this.createBelongsToAccessorFor('company', companyRepositoryGetter,);
    this.registerInclusionResolver('company', this.company.inclusionResolver);
  }
}
