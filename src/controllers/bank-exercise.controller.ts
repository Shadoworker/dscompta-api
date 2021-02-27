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
import {BankExercise} from '../models';
import {BankExerciseRepository} from '../repositories';

export class BankExerciseController {
  constructor(
    @repository(BankExerciseRepository)
    public archiveRepository: BankExerciseRepository,
  ) { }

  @post('/bank-exercises', {
    responses: {
      '200': {
        description: 'BankExercise model instance',
        content: {'application/json': {schema: getModelSchemaRef(BankExercise)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankExercise, {
            title: 'NewBankExercise',

          }),
        },
      },
    })
    archive: BankExercise,
  ): Promise<BankExercise> {
    return this.archiveRepository.create(archive);
  }

  @get('/bank-exercises/count', {
    responses: {
      '200': {
        description: 'BankExercise model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(BankExercise) where?: Where<BankExercise>,
  ): Promise<Count> {
    return this.archiveRepository.count(where);
  }

  @get('/bank-exercises', {
    responses: {
      '200': {
        description: 'Array of BankExercise model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(BankExercise, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(BankExercise) filter?: Filter<BankExercise>,
  ): Promise<BankExercise[]> {
    return this.archiveRepository.find(filter);
  }

  @patch('/bank-exercises', {
    responses: {
      '200': {
        description: 'BankExercise PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankExercise, {partial: true}),
        },
      },
    })
    archive: BankExercise,
    @param.where(BankExercise) where?: Where<BankExercise>,
  ): Promise<Count> {
    return this.archiveRepository.updateAll(archive, where);
  }

  @get('/bank-exercises/{id}', {
    responses: {
      '200': {
        description: 'BankExercise model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(BankExercise, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(BankExercise, {exclude: 'where'}) filter?: FilterExcludingWhere<BankExercise>
  ): Promise<BankExercise> {
    return this.archiveRepository.findById(id, filter);
  }

  @patch('/bank-exercises/{id}', {
    responses: {
      '204': {
        description: 'BankExercise PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankExercise, {partial: true}),
        },
      },
    })
    archive: BankExercise,
  ): Promise<void> {
    await this.archiveRepository.updateById(id, archive);
  }

  @put('/bank-exercises/{id}', {
    responses: {
      '204': {
        description: 'BankExercise PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() archive: BankExercise,
  ): Promise<void> {
    await this.archiveRepository.replaceById(id, archive);
  }

  @del('/bank-exercises/{id}', {
    responses: {
      '204': {
        description: 'BankExercise DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.archiveRepository.deleteById(id);
  }
}
