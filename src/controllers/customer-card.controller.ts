import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {CustomerCard} from '../models';
import {CustomerCardRepository} from '../repositories';

export class CustomerCardController {
  constructor(
    @repository(CustomerCardRepository)
    public archiveRepository: CustomerCardRepository,
  ) { }

  @post('/customer-cards', {
    responses: {
      '200': {
        description: 'CustomerCard model instance',
        content: {'application/json': {schema: getModelSchemaRef(CustomerCard)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerCard, {
            title: 'NewCustomerCard',

          }),
        },
      },
    })
    archive: CustomerCard,
  ): Promise<CustomerCard> {
    return this.archiveRepository.create(archive);
  }

  @get('/customer-cards/count', {
    responses: {
      '200': {
        description: 'CustomerCard model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CustomerCard) where?: Where<CustomerCard>,
  ): Promise<Count> {
    return this.archiveRepository.count(where);
  }

  @get('/customer-cards', {
    responses: {
      '200': {
        description: 'Array of CustomerCard model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CustomerCard, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CustomerCard) filter?: Filter<CustomerCard>,
  ): Promise<CustomerCard[]> {
    return this.archiveRepository.find(filter);
  }

  @patch('/customer-cards', {
    responses: {
      '200': {
        description: 'CustomerCard PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerCard, {partial: true}),
        },
      },
    })
    archive: CustomerCard,
    @param.where(CustomerCard) where?: Where<CustomerCard>,
  ): Promise<Count> {
    return this.archiveRepository.updateAll(archive, where);
  }

  @get('/customer-cards/{id}', {
    responses: {
      '200': {
        description: 'CustomerCard model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CustomerCard, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CustomerCard, {exclude: 'where'}) filter?: FilterExcludingWhere<CustomerCard>
  ): Promise<CustomerCard> {
    return this.archiveRepository.findById(id, filter);
  }

  @patch('/customer-cards/{id}', {
    responses: {
      '204': {
        description: 'CustomerCard PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerCard, {partial: true}),
        },
      },
    })
    archive: CustomerCard,
  ): Promise<void> {
    await this.archiveRepository.updateById(id, archive);
  }

  @put('/customer-cards/{id}', {
    responses: {
      '204': {
        description: 'CustomerCard PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() archive: CustomerCard,
  ): Promise<void> {
    await this.archiveRepository.replaceById(id, archive);
  }

  @del('/customer-cards/{id}', {
    responses: {
      '204': {
        description: 'CustomerCard DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.archiveRepository.deleteById(id);
  }
}
