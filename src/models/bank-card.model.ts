import {Entity, model, property} from '@loopback/repository';

@model()
export class BankCard extends Entity {
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
    type: 'string',
  })
  url?: string;

  @property({
    type: 'string',
  })
  username?: string;

  @property({
    type: 'string',
  })
  password?: string;

  // @property({
  //   type: 'object',
  // })
  // data?: object;

  @property({
    type: 'boolean',
    default: true,
  })
  active?: boolean;

  @property({
    type: 'string',
  })
  companyId?: string;

  constructor(data?: Partial<BankCard>) {
    super(data);
  }
}

export interface BankCardRelations {
  // describe navigational properties here
}

export type BankCardWithRelations = BankCard & BankCardRelations;
