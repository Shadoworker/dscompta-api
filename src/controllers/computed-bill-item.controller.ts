import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ComputedBillItem} from '../models';
import {ComputedBillItemRepository} from '../repositories';

export class ComputedBillItemController {
  constructor(
    @repository(ComputedBillItemRepository)
    public computedBillItemRepository : ComputedBillItemRepository,
  ) {}

  @post('/computed-bill-items', {
    responses: {
      '200': {
        description: 'ComputedBillItem model instance',
        content: {'application/json': {schema: getModelSchemaRef(ComputedBillItem)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComputedBillItem, {
            title: 'NewComputedBillItem',
            exclude: ['id'],
          }),
        },
      },
    })
    computedBillItem: Omit<ComputedBillItem, 'id'>,
  ): Promise<ComputedBillItem> {
    return this.computedBillItemRepository.create(computedBillItem);
  }

  @get('/computed-bill-items/count', {
    responses: {
      '200': {
        description: 'ComputedBillItem model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ComputedBillItem) where?: Where<ComputedBillItem>,
  ): Promise<Count> {
    return this.computedBillItemRepository.count(where);
  }

  @get('/computed-bill-items', {
    responses: {
      '200': {
        description: 'Array of ComputedBillItem model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ComputedBillItem, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ComputedBillItem) filter?: Filter<ComputedBillItem>,
  ): Promise<ComputedBillItem[]> {
    return this.computedBillItemRepository.find(filter);
  }

  @patch('/computed-bill-items', {
    responses: {
      '200': {
        description: 'ComputedBillItem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComputedBillItem, {partial: true}),
        },
      },
    })
    computedBillItem: ComputedBillItem,
    @param.where(ComputedBillItem) where?: Where<ComputedBillItem>,
  ): Promise<Count> {
    return this.computedBillItemRepository.updateAll(computedBillItem, where);
  }

  @get('/computed-bill-items/{id}', {
    responses: {
      '200': {
        description: 'ComputedBillItem model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ComputedBillItem, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ComputedBillItem, {exclude: 'where'}) filter?: FilterExcludingWhere<ComputedBillItem>
  ): Promise<ComputedBillItem> {
    return this.computedBillItemRepository.findById(id, filter);
  }

  @patch('/computed-bill-items/{id}', {
    responses: {
      '204': {
        description: 'ComputedBillItem PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComputedBillItem, {partial: true}),
        },
      },
    })
    computedBillItem: ComputedBillItem,
  ): Promise<void> {
    await this.computedBillItemRepository.updateById(id, computedBillItem);
  }

  @put('/computed-bill-items/{id}', {
    responses: {
      '204': {
        description: 'ComputedBillItem PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() computedBillItem: ComputedBillItem,
  ): Promise<void> {
    await this.computedBillItemRepository.replaceById(id, computedBillItem);
  }

  @del('/computed-bill-items/{id}', {
    responses: {
      '204': {
        description: 'ComputedBillItem DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.computedBillItemRepository.deleteById(id);
  }
}
