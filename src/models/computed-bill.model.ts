import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Company} from './company.model';
import {ComputedBillItem} from './computed-bill-item.model';

@model()
export class ComputedBill extends Entity {
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
    type: 'number',
  })
  no_ref?: number;

  @property({
    type: 'string',
  })
  from_name?: string;

  @property({
    type: 'string',
  })
  bill_from_address?: string;

  @property({
    type: 'number',
  })
  bill_from_tel?: number;

  @property({
    type: 'string',
  })
  bill_from_mail?: string;

  @property({
    type: 'string',
  })
  bill_from_city?: string;

  @property({
    type: 'number',
  })
  bill_from_zipcode?: number;

  @property({
    type: 'string',
  })
  to_name?: string;

  @property({
    type: 'string',
  })
  bill_to_address?: string;

  @property({
    type: 'number',
  })
  bill_to_tel?: number;

  @property({
    type: 'string',
  })
  bill_to_mail?: string;

  @property({
    type: 'string',
  })
  bill_to_city?: string;

  @property({
    type: 'number',
  })
  bill_to_zipcode?: number;

  @property({
    type: 'string',
    default: "",
  })
  to_id?: string;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'string',
  })
  to_address?: string;

  @property({
    type: 'number',
  })
  no_order?: number;

  @property({
    type: 'date',
  })
  deadline?: string;

  @property({
    type: 'number',
  })
  total?: number;

  @property({
    type: 'array',
    itemType: 'object'
  })
  items?: object[];

  @property({
    type: 'string',
  })
  logo?: string;

  @property({
    type: 'string',
  })
  signing?: string;

  @property({
    type: 'string',
    default: "bill",
  })
  type?: string;

  @property({
    type: 'string',
    default: "",
  })
  conditions?: string;

  @property({
    type: 'string',
    default: "Non suivi",
  })
  status?: string;

  @property({
    type: 'string',
    default: "",
  })
  legal?: string;


  @hasMany(() => ComputedBillItem)
  computedBillItems: ComputedBillItem[];

  @belongsTo(() => Company)
  companyId: string;

  constructor(data?: Partial<ComputedBill>) {
    super(data);
  }
}

export interface ComputedBillRelations {
  // describe navigational properties here
}

export type ComputedBillWithRelations = ComputedBill & ComputedBillRelations;
