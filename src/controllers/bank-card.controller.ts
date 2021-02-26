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
import {BankCard} from '../models';
import {BankCardRepository} from '../repositories';

export class BankCardController {
  constructor(
    @repository(BankCardRepository)
    public archiveRepository: BankCardRepository,
  ) { }

  @post('/bank-cards', {
    responses: {
      '200': {
        description: 'BankCard model instance',
        content: {'application/json': {schema: getModelSchemaRef(BankCard)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankCard, {
            title: 'NewBankCard',

          }),
        },
      },
    })
    archive: BankCard,
  ): Promise<BankCard> {
    return this.archiveRepository.create(archive);
  }

  @get('/bank-cards/count', {
    responses: {
      '200': {
        description: 'BankCard model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(BankCard) where?: Where<BankCard>,
  ): Promise<Count> {
    return this.archiveRepository.count(where);
  }

  @get('/bank-cards', {
    responses: {
      '200': {
        description: 'Array of BankCard model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(BankCard, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(BankCard) filter?: Filter<BankCard>,
  ): Promise<BankCard[]> {
    return this.archiveRepository.find(filter);
  }

  @patch('/bank-cards', {
    responses: {
      '200': {
        description: 'BankCard PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankCard, {partial: true}),
        },
      },
    })
    archive: BankCard,
    @param.where(BankCard) where?: Where<BankCard>,
  ): Promise<Count> {
    return this.archiveRepository.updateAll(archive, where);
  }

  @get('/bank-cards/{id}', {
    responses: {
      '200': {
        description: 'BankCard model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(BankCard, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(BankCard, {exclude: 'where'}) filter?: FilterExcludingWhere<BankCard>
  ): Promise<BankCard> {
    return this.archiveRepository.findById(id, filter);
  }

  @patch('/bank-cards/{id}', {
    responses: {
      '204': {
        description: 'BankCard PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankCard, {partial: true}),
        },
      },
    })
    archive: BankCard,
  ): Promise<void> {
    await this.archiveRepository.updateById(id, archive);
  }

  @put('/bank-cards/{id}', {
    responses: {
      '204': {
        description: 'BankCard PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() archive: BankCard,
  ): Promise<void> {
    await this.archiveRepository.replaceById(id, archive);
  }

  @del('/bank-cards/{id}', {
    responses: {
      '204': {
        description: 'BankCard DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.archiveRepository.deleteById(id);
  }
}
