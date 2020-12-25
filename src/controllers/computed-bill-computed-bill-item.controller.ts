import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  ComputedBill,
  ComputedBillItem,
} from '../models';
import {ComputedBillRepository} from '../repositories';

export class ComputedBillComputedBillItemController {
  constructor(
    @repository(ComputedBillRepository) protected computedBillRepository: ComputedBillRepository,
  ) { }

  @get('/computed-bills/{id}/computed-bill-items', {
    responses: {
      '200': {
        description: 'Array of ComputedBill has many ComputedBillItem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ComputedBillItem)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ComputedBillItem>,
  ): Promise<ComputedBillItem[]> {
    return this.computedBillRepository.computedBillItems(id).find(filter);
  }

  @post('/computed-bills/{id}/computed-bill-items', {
    responses: {
      '200': {
        description: 'ComputedBill model instance',
        content: {'application/json': {schema: getModelSchemaRef(ComputedBillItem)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof ComputedBill.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComputedBillItem, {
            title: 'NewComputedBillItemInComputedBill',
            exclude: ['id'],
            optional: ['computedBillId']
          }),
        },
      },
    }) computedBillItem: Omit<ComputedBillItem, 'id'>,
  ): Promise<ComputedBillItem> {
    return this.computedBillRepository.computedBillItems(id).create(computedBillItem);
  }

  @patch('/computed-bills/{id}/computed-bill-items', {
    responses: {
      '200': {
        description: 'ComputedBill.ComputedBillItem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComputedBillItem, {partial: true}),
        },
      },
    })
    computedBillItem: Partial<ComputedBillItem>,
    @param.query.object('where', getWhereSchemaFor(ComputedBillItem)) where?: Where<ComputedBillItem>,
  ): Promise<Count> {
    return this.computedBillRepository.computedBillItems(id).patch(computedBillItem, where);
  }

  @del('/computed-bills/{id}/computed-bill-items', {
    responses: {
      '200': {
        description: 'ComputedBill.ComputedBillItem DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ComputedBillItem)) where?: Where<ComputedBillItem>,
  ): Promise<Count> {
    return this.computedBillRepository.computedBillItems(id).delete(where);
  }
}
