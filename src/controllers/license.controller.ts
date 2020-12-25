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
import {License} from '../models';
import {LicenseRepository} from '../repositories';

export class LicenseController {
  constructor(
    @repository(LicenseRepository)
    public licenseRepository : LicenseRepository,
  ) {}

  @post('/licenses', {
    responses: {
      '200': {
        description: 'License model instance',
        content: {'application/json': {schema: getModelSchemaRef(License)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(License, {
            title: 'NewLicense',
            exclude: ['id'],
          }),
        },
      },
    })
    license: Omit<License, 'id'>,
  ): Promise<License> {
    return this.licenseRepository.create(license);
  }

  @get('/licenses/count', {
    responses: {
      '200': {
        description: 'License model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(License) where?: Where<License>,
  ): Promise<Count> {
    return this.licenseRepository.count(where);
  }

  @get('/licenses', {
    responses: {
      '200': {
        description: 'Array of License model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(License, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(License) filter?: Filter<License>,
  ): Promise<License[]> {
    return this.licenseRepository.find(filter);
  }

  @patch('/licenses', {
    responses: {
      '200': {
        description: 'License PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(License, {partial: true}),
        },
      },
    })
    license: License,
    @param.where(License) where?: Where<License>,
  ): Promise<Count> {
    return this.licenseRepository.updateAll(license, where);
  }

  @get('/licenses/{id}', {
    responses: {
      '200': {
        description: 'License model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(License, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(License, {exclude: 'where'}) filter?: FilterExcludingWhere<License>
  ): Promise<License> {
    return this.licenseRepository.findById(id, filter);
  }

  @patch('/licenses/{id}', {
    responses: {
      '204': {
        description: 'License PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(License, {partial: true}),
        },
      },
    })
    license: License,
  ): Promise<void> {
    await this.licenseRepository.updateById(id, license);
  }

  @put('/licenses/{id}', {
    responses: {
      '204': {
        description: 'License PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() license: License,
  ): Promise<void> {
    await this.licenseRepository.replaceById(id, license);
  }

  @del('/licenses/{id}', {
    responses: {
      '204': {
        description: 'License DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.licenseRepository.deleteById(id);
  }
}
