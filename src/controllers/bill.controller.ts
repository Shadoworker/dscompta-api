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
import {Bill} from '../models';
import {BillRepository} from '../repositories';

export class BillController {
  constructor(
    @repository(BillRepository)
    public billRepository : BillRepository,
  ) {}

  @post('/bills', {
    responses: {
      '200': {
        description: 'Bill model instance',
        content: {'application/json': {schema: getModelSchemaRef(Bill)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bill, {
            title: 'NewBill',
            
          }),
        },
      },
    })
    bill: Bill,
  ): Promise<Bill> {
    return this.billRepository.create(bill);
  }

  @get('/bills/count', {
    responses: {
      '200': {
        description: 'Bill model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Bill) where?: Where<Bill>,
  ): Promise<Count> {
    return this.billRepository.count(where);
  }

  @get('/bills', {
    responses: {
      '200': {
        description: 'Array of Bill model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Bill, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Bill) filter?: Filter<Bill>,
  ): Promise<Bill[]> {
    return this.billRepository.find(filter);
  }

  @patch('/bills', {
    responses: {
      '200': {
        description: 'Bill PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bill, {partial: true}),
        },
      },
    })
    bill: Bill,
    @param.where(Bill) where?: Where<Bill>,
  ): Promise<Count> {
    return this.billRepository.updateAll(bill, where);
  }

  @get('/bills/{id}', {
    responses: {
      '200': {
        description: 'Bill model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Bill, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Bill, {exclude: 'where'}) filter?: FilterExcludingWhere<Bill>
  ): Promise<Bill> {
    return this.billRepository.findById(id, filter);
  }

  @patch('/bills/{id}', {
    responses: {
      '204': {
        description: 'Bill PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bill, {partial: true}),
        },
      },
    })
    bill: Bill,
  ): Promise<void> {
    await this.billRepository.updateById(id, bill);
  }

  @put('/bills/{id}', {
    responses: {
      '204': {
        description: 'Bill PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() bill: Bill,
  ): Promise<void> {
    await this.billRepository.replaceById(id, bill);
  }

  @del('/bills/{id}', {
    responses: {
      '204': {
        description: 'Bill DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.billRepository.deleteById(id);
  }
}
