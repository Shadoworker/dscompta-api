import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {User, UserRelations, Bill, Company} from '../models';
import {BillRepository} from './bill.repository';
import {CompanyRepository} from './company.repository';

// import {InterventionRepository} from './intervention.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
  > {


  public readonly company: BelongsToAccessor<Company, typeof User.prototype.id>;
  // public readonly interventions: HasManyRepositoryFactory<Intervention, typeof User.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, /*@repository.getter('InterventionRepository') protected interventionRepositoryGetter: Getter<InterventionRepository>,*/ @repository.getter('BillRepository') protected billRepositoryGetter: Getter<BillRepository>, /*@repository.getter('InterventionRepository') protected interventionRepositoryGetter: Getter<InterventionRepository>,*/ @repository.getter('CompanyRepository') protected companyRepositoryGetter: Getter<CompanyRepository>, /*@repository.getter('InterventionRepository') protected interventionRepositoryGetter: Getter<InterventionRepository>,*/
  ) {
    super(User, dataSource);
    this.company = this.createBelongsToAccessorFor('company', companyRepositoryGetter,);
    this.registerInclusionResolver('company', this.company.inclusionResolver);
  }
}
