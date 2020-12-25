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
  Company,
  User,
} from '../models';
import {CompanyRepository} from '../repositories';

export class CompanyUserController {
  constructor(
    @repository(CompanyRepository) protected CompanyRepository: CompanyRepository,
  ) { }

  @get('/companies/{id}/users', {
    responses: {
      '200': {
        description: 'Array of Company has many User',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<User>,
  ): Promise<User[]> {
    return this.CompanyRepository.users(id).find(filter);
  }

  @post('/companies/{id}/users', {
    responses: {
      '200': {
        description: 'Company model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Company.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUserInCompany',
            exclude: ['id'],
            optional: ['CompanyId']
          }),
        },
      },
    }) user: Omit<User, 'id'>,
  ): Promise<User> {
    return this.CompanyRepository.users(id).create(user);
  }

  @patch('/companies/{id}/users', {
    responses: {
      '200': {
        description: 'Company.User PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: Partial<User>,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.CompanyRepository.users(id).patch(user, where);
  }

  @del('/companies/{id}/users', {
    responses: {
      '200': {
        description: 'Company.User DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.CompanyRepository.users(id).delete(where);
  }
}
