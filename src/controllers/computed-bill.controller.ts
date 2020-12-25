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
import {ComputedBill} from '../models';
import {ComputedBillRepository} from '../repositories';

export class ComputedBillController {
  constructor(
    @repository(ComputedBillRepository)
    public computedBillRepository : ComputedBillRepository,
  ) {}

  @post('/computed-bills', {
    responses: {
      '200': {
        description: 'ComputedBill model instance',
        content: {'application/json': {schema: getModelSchemaRef(ComputedBill)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComputedBill, {
            title: 'NewComputedBill',
            exclude: ['id'],
          }),
        },
      },
    })
    computedBill: Omit<ComputedBill, 'id'>,
  ): Promise<ComputedBill> {
    return this.computedBillRepository.create(computedBill);
  }

  @get('/computed-bills/count', {
    responses: {
      '200': {
        description: 'ComputedBill model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ComputedBill) where?: Where<ComputedBill>,
  ): Promise<Count> {
    return this.computedBillRepository.count(where);
  }

  @get('/computed-bills', {
    responses: {
      '200': {
        description: 'Array of ComputedBill model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ComputedBill, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ComputedBill) filter?: Filter<ComputedBill>,
  ): Promise<ComputedBill[]> {
    return this.computedBillRepository.find(filter);
  }

  @patch('/computed-bills', {
    responses: {
      '200': {
        description: 'ComputedBill PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComputedBill, {partial: true}),
        },
      },
    })
    computedBill: ComputedBill,
    @param.where(ComputedBill) where?: Where<ComputedBill>,
  ): Promise<Count> {
    return this.computedBillRepository.updateAll(computedBill, where);
  }

  @get('/computed-bills/{id}', {
    responses: {
      '200': {
        description: 'ComputedBill model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ComputedBill, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ComputedBill, {exclude: 'where'}) filter?: FilterExcludingWhere<ComputedBill>
  ): Promise<ComputedBill> {
    return this.computedBillRepository.findById(id, filter);
  }

  @patch('/computed-bills/{id}', {
    responses: {
      '204': {
        description: 'ComputedBill PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComputedBill, {partial: true}),
        },
      },
    })
    computedBill: ComputedBill,
  ): Promise<void> {
    await this.computedBillRepository.updateById(id, computedBill);
  }

  @put('/computed-bills/{id}', {
    responses: {
      '204': {
        description: 'ComputedBill PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() computedBill: ComputedBill,
  ): Promise<void> {
    await this.computedBillRepository.replaceById(id, computedBill);
  }

  @del('/computed-bills/{id}', {
    responses: {
      '204': {
        description: 'ComputedBill DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.computedBillRepository.deleteById(id);
  }
}
