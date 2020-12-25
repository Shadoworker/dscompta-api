import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ComputedBillItem,
  ComputedBill,
} from '../models';
import {ComputedBillItemRepository} from '../repositories';

export class ComputedBillItemComputedBillController {
  constructor(
    @repository(ComputedBillItemRepository)
    public computedBillItemRepository: ComputedBillItemRepository,
  ) { }

  @get('/computed-bill-items/{id}/computed-bill', {
    responses: {
      '200': {
        description: 'ComputedBill belonging to ComputedBillItem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ComputedBill)},
          },
        },
      },
    },
  })
  async getComputedBill(
    @param.path.string('id') id: typeof ComputedBillItem.prototype.id,
  ): Promise<ComputedBill> {
    return this.computedBillItemRepository.computedBill(id);
  }
}
