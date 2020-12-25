import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {ComputedBill, ComputedBillRelations, ComputedBillItem, Company} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ComputedBillItemRepository} from './computed-bill-item.repository';
import {CompanyRepository} from './company.repository';

export class ComputedBillRepository extends DefaultCrudRepository<
  ComputedBill,
  typeof ComputedBill.prototype.id,
  ComputedBillRelations
> {

  public readonly computedBillItems: HasManyRepositoryFactory<ComputedBillItem, typeof ComputedBill.prototype.id>;

  public readonly company: BelongsToAccessor<Company, typeof ComputedBill.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ComputedBillItemRepository') protected computedBillItemRepositoryGetter: Getter<ComputedBillItemRepository>, @repository.getter('CompanyRepository') protected companyRepositoryGetter: Getter<CompanyRepository>,
  ) {
    super(ComputedBill, dataSource);
    this.company = this.createBelongsToAccessorFor('company', companyRepositoryGetter,);
    this.registerInclusionResolver('company', this.company.inclusionResolver);
    this.computedBillItems = this.createHasManyRepositoryFactoryFor('computedBillItems', computedBillItemRepositoryGetter,);
    this.registerInclusionResolver('computedBillItems', this.computedBillItems.inclusionResolver);
  }
}
