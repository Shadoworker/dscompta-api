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
import {Archive} from '../models';
import {ArchiveRepository} from '../repositories';

export class ArchiveController {
  constructor(
    @repository(ArchiveRepository)
    public archiveRepository: ArchiveRepository,
  ) { }

  @post('/archives', {
    responses: {
      '200': {
        description: 'Archive model instance',
        content: {'application/json': {schema: getModelSchemaRef(Archive)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Archive, {
            title: 'NewArchive',

          }),
        },
      },
    })
    archive: Archive,
  ): Promise<Archive> {
    return this.archiveRepository.create(archive);
  }

  @get('/archives/count', {
    responses: {
      '200': {
        description: 'Archive model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Archive) where?: Where<Archive>,
  ): Promise<Count> {
    return this.archiveRepository.count(where);
  }

  @get('/archives', {
    responses: {
      '200': {
        description: 'Array of Archive model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Archive, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Archive) filter?: Filter<Archive>,
  ): Promise<Archive[]> {
    return this.archiveRepository.find(filter);
  }

  @patch('/archives', {
    responses: {
      '200': {
        description: 'Archive PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Archive, {partial: true}),
        },
      },
    })
    archive: Archive,
    @param.where(Archive) where?: Where<Archive>,
  ): Promise<Count> {
    return this.archiveRepository.updateAll(archive, where);
  }

  @get('/archives/{id}', {
    responses: {
      '200': {
        description: 'Archive model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Archive, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Archive, {exclude: 'where'}) filter?: FilterExcludingWhere<Archive>
  ): Promise<Archive> {
    return this.archiveRepository.findById(id, filter);
  }

  @patch('/archives/{id}', {
    responses: {
      '204': {
        description: 'Archive PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Archive, {partial: true}),
        },
      },
    })
    archive: Archive,
  ): Promise<void> {
    await this.archiveRepository.updateById(id, archive);
  }

  @put('/archives/{id}', {
    responses: {
      '204': {
        description: 'Archive PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() archive: Archive,
  ): Promise<void> {
    await this.archiveRepository.replaceById(id, archive);
  }

  @del('/archives/{id}', {
    responses: {
      '204': {
        description: 'Archive DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.archiveRepository.deleteById(id);
  }
}
