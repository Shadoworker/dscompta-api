import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  User,
  Company,
} from '../models';
import {UserRepository} from '../repositories';

export class UserCompanyController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @get('/users/{id}/company', {
    responses: {
      '200': {
        description: 'Company belonging to User',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Company)},
          },
        },
      },
    },
  })
  async getCompany(
    @param.path.string('id') id: typeof User.prototype.id,
  ): Promise<Company> {
    return this.userRepository.company(id);
  }
}
