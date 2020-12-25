import {Entity, model, property, belongsTo} from '@loopback/repository';
import {ComputedBill} from './computed-bill.model';

@model()
export class ComputedBillItem extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
  })
  qty?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
  })
  unit_price?: number;

  @property({
    type: 'number',
  })
  total_ht?: number;

  @property({
    type: 'number',
  })
  taxe?: number;

  @belongsTo(() => ComputedBill)
  computedBillId: string;

  constructor(data?: Partial<ComputedBillItem>) {
    super(data);
  }
}

export interface ComputedBillItemRelations {
  // describe navigational properties here
}

export type ComputedBillItemWithRelations = ComputedBillItem & ComputedBillItemRelations;
