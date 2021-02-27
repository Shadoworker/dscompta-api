import {Entity, model, property} from '@loopback/repository';

@model()
export class BankStatement extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  filename?: string;

  @property({
    type: 'string',
  })
  month?: string;

  @property({
    type: 'string',
  })
  year?: string;

  @property({
    type: 'date',
    default: '$now',
  })
  date?: Date;

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

  constructor(data?: Partial<BankStatement>) {
    super(data);
  }
}

export interface BankStatementRelations {
  // describe navigational properties here
}

export type BankStatementWithRelations = BankStatement & BankStatementRelations;
