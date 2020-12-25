import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Bill,
  Company,
} from '../models';
import {BillRepository} from '../repositories';

export class BillCompanyController {
  constructor(
    @repository(BillRepository)
    public billRepository: BillRepository,
  ) { }

  @get('/bills/{id}/company', {
    responses: {
      '200': {
        description: 'Company belonging to Bill',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Company)},
          },
        },
      },
    },
  })
  async getCompany(
    @param.path.string('id') id: typeof Bill.prototype.id,
  ): Promise<Company> {
    return this.billRepository.company(id);
  }
}
