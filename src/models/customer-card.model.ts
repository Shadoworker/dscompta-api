import {Entity, model, property} from '@loopback/repository';

@model()
export class CustomerCard extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'object',
  })
  data?: object;

  @property({
    type: 'boolean',
    default: true,
  })
  active?: boolean;

  @property({
    type: 'string',
  })
  companyId?: string;

  constructor(data?: Partial<CustomerCard>) {
    super(data);
  }
}

export interface CustomerCardRelations {
  // describe navigational properties here
}

export type CustomerCardWithRelations = CustomerCard & CustomerCardRelations;
