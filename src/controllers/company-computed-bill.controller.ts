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
  ComputedBill,
} from '../models';
import {CompanyRepository} from '../repositories';

export class CompanyComputedBillController {
  constructor(
    @repository(CompanyRepository) protected companyRepository: CompanyRepository,
  ) { }

  @get('/companies/{id}/computed-bills', {
    responses: {
      '200': {
        description: 'Array of Company has many ComputedBill',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ComputedBill)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ComputedBill>,
  ): Promise<ComputedBill[]> {
    return this.companyRepository.computedBills(id).find(filter);
  }

  @post('/companies/{id}/computed-bills', {
    responses: {
      '200': {
        description: 'Company model instance',
        content: {'application/json': {schema: getModelSchemaRef(ComputedBill)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Company.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComputedBill, {
            title: 'NewComputedBillInCompany',
            exclude: ['id'],
            optional: ['companyId']
          }),
        },
      },
    }) computedBill: Omit<ComputedBill, 'id'>,
  ): Promise<ComputedBill> {
    return this.companyRepository.computedBills(id).create(computedBill);
  }

  @patch('/companies/{id}/computed-bills', {
    responses: {
      '200': {
        description: 'Company.ComputedBill PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComputedBill, {partial: true}),
        },
      },
    })
    computedBill: Partial<ComputedBill>,
    @param.query.object('where', getWhereSchemaFor(ComputedBill)) where?: Where<ComputedBill>,
  ): Promise<Count> {
    return this.companyRepository.computedBills(id).patch(computedBill, where);
  }

  @del('/companies/{id}/computed-bills', {
    responses: {
      '200': {
        description: 'Company.ComputedBill DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ComputedBill)) where?: Where<ComputedBill>,
  ): Promise<Count> {
    return this.companyRepository.computedBills(id).delete(where);
  }
}
