import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Company, CompanyRelations, User, Bill, ComputedBill} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';
import {BillRepository} from './bill.repository';
import {ComputedBillRepository} from './computed-bill.repository';

export class CompanyRepository extends DefaultCrudRepository<
  Company,
  typeof Company.prototype.id,
  CompanyRelations
> {

  public readonly users: HasManyRepositoryFactory<User, typeof Company.prototype.id>;

  public readonly bills: HasManyRepositoryFactory<Bill, typeof Company.prototype.id>;
  public readonly computedBills: HasManyRepositoryFactory<ComputedBill, typeof Company.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('BillRepository') protected billRepositoryGetter: Getter<BillRepository>, @repository.getter('ComputedBillRepository') protected computedBillRepositoryGetter: Getter<ComputedBillRepository>,
  ) {
    super(Company, dataSource);
    this.bills = this.createHasManyRepositoryFactoryFor('bills', billRepositoryGetter,);
    this.registerInclusionResolver('bills', this.bills.inclusionResolver);
    this.users = this.createHasManyRepositoryFactoryFor('users', userRepositoryGetter,);
    this.registerInclusionResolver('users', this.users.inclusionResolver);
  }
}
