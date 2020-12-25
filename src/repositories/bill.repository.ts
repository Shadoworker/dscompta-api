import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Bill, BillRelations, User, Company} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';
import {CompanyRepository} from './company.repository';

export class BillRepository extends DefaultCrudRepository<
  Bill,
  typeof Bill.prototype.id,
  BillRelations
> {


  public readonly company: BelongsToAccessor<Company, typeof Bill.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('CompanyRepository') protected companyRepositoryGetter: Getter<CompanyRepository>,
  ) {
    super(Bill, dataSource);
    this.company = this.createBelongsToAccessorFor('company', companyRepositoryGetter,);
    this.registerInclusionResolver('company', this.company.inclusionResolver);
  }
}
