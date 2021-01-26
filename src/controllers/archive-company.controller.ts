import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Archive,
  Company
} from '../models';
import {ArchiveRepository} from '../repositories';

export class ArchiveCompanyController {
  constructor(
    @repository(ArchiveRepository)
    public archiveRepository: ArchiveRepository,
  ) { }

  @get('/archives/{id}/company', {
    responses: {
      '200': {
        description: 'Company belonging to Archive',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Company)},
          },
        },
      },
    },
  })
  async getCompany(
    @param.path.string('id') id: typeof Archive.prototype.id,
  ): Promise<Company> {
    return this.archiveRepository.company(id);
  }
}
