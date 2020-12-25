import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ComputedBillItem, ComputedBillItemRelations, ComputedBill} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ComputedBillRepository} from './computed-bill.repository';

export class ComputedBillItemRepository extends DefaultCrudRepository<
  ComputedBillItem,
  typeof ComputedBillItem.prototype.id,
  ComputedBillItemRelations
> {

  public readonly computedBill: BelongsToAccessor<ComputedBill, typeof ComputedBillItem.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ComputedBillRepository') protected computedBillRepositoryGetter: Getter<ComputedBillRepository>,
  ) {
    super(ComputedBillItem, dataSource);
    this.computedBill = this.createBelongsToAccessorFor('computedBill', computedBillRepositoryGetter,);
    this.registerInclusionResolver('computedBill', this.computedBill.inclusionResolver);
  }
}
