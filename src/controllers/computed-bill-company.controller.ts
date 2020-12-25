import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ComputedBill,
  Company,
} from '../models';
import {ComputedBillRepository} from '../repositories';

export class ComputedBillCompanyController {
  constructor(
    @repository(ComputedBillRepository)
    public computedBillRepository: ComputedBillRepository,
  ) { }

  @get('/computed-bills/{id}/company', {
    responses: {
      '200': {
        description: 'Company belonging to ComputedBill',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Company)},
          },
        },
      },
    },
  })
  async getCompany(
    @param.path.string('id') id: typeof ComputedBill.prototype.id,
  ): Promise<Company> {
    return this.computedBillRepository.company(id);
  }
}
