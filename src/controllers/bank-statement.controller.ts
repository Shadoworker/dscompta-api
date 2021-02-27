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
import {BankStatement} from '../models';
import {BankStatementRepository} from '../repositories';

export class BankStatementController {
  constructor(
    @repository(BankStatementRepository)
    public archiveRepository: BankStatementRepository,
  ) { }

  @post('/bank-statements', {
    responses: {
      '200': {
        description: 'BankStatement model instance',
        content: {'application/json': {schema: getModelSchemaRef(BankStatement)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankStatement, {
            title: 'NewBankStatement',

          }),
        },
      },
    })
    archive: BankStatement,
  ): Promise<BankStatement> {
    return this.archiveRepository.create(archive);
  }

  @get('/bank-statements/count', {
    responses: {
      '200': {
        description: 'BankStatement model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(BankStatement) where?: Where<BankStatement>,
  ): Promise<Count> {
    return this.archiveRepository.count(where);
  }

  @get('/bank-statements', {
    responses: {
      '200': {
        description: 'Array of BankStatement model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(BankStatement, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(BankStatement) filter?: Filter<BankStatement>,
  ): Promise<BankStatement[]> {
    return this.archiveRepository.find(filter);
  }

  @patch('/bank-statements', {
    responses: {
      '200': {
        description: 'BankStatement PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankStatement, {partial: true}),
        },
      },
    })
    archive: BankStatement,
    @param.where(BankStatement) where?: Where<BankStatement>,
  ): Promise<Count> {
    return this.archiveRepository.updateAll(archive, where);
  }

  @get('/bank-statements/{id}', {
    responses: {
      '200': {
        description: 'BankStatement model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(BankStatement, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(BankStatement, {exclude: 'where'}) filter?: FilterExcludingWhere<BankStatement>
  ): Promise<BankStatement> {
    return this.archiveRepository.findById(id, filter);
  }

  @patch('/bank-statements/{id}', {
    responses: {
      '204': {
        description: 'BankStatement PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankStatement, {partial: true}),
        },
      },
    })
    archive: BankStatement,
  ): Promise<void> {
    await this.archiveRepository.updateById(id, archive);
  }

  @put('/bank-statements/{id}', {
    responses: {
      '204': {
        description: 'BankStatement PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() archive: BankStatement,
  ): Promise<void> {
    await this.archiveRepository.replaceById(id, archive);
  }

  @del('/bank-statements/{id}', {
    responses: {
      '204': {
        description: 'BankStatement DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.archiveRepository.deleteById(id);
  }
}
