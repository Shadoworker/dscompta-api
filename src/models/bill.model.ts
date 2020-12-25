import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Company} from './company.model';

@model()
export class Bill extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    default: "",
  })
  uri?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
    default: 'none',
  })
  status?: string;

  @property({
    type: 'string',
    default: 'customer',
  })
  type?: string;

  ////// Processing Layer ///////
  @property({
    type: 'string',
    default: '',
  })
  no_piece?: string;

  @property({
    type: 'date',
    default: '$now',
  })
  date?: Date;

  @property({
    type: 'string',
    default: '',
  })
  no_compte?: string;

  @property({
    type: 'string',
    default: '',
  })
  libelle?: string;

  @property({
    type: 'number',
    default: null,
  })
  ttc?: number;

  @property({
    type: 'number',
    default: null,
  })
  ht?: number;

  @property({
    type: 'number',
    default: null,
  })
  tva?: number;
  ///////////////////////////////
  is_active?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  is_archived?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  is_exported?: boolean;

  @property({
    type: 'date',
    default: '$now',
  })
  created_at?: Date;

  @property({
    type: 'date',
    default: '$now',
  })
  updated_at?: Date;


  @belongsTo(() => Company)
  companyId: string;
  

  constructor(data?: Partial<Bill>) {
    super(data);
  }
}

export interface BillRelations {
  // describe navigational properties here
}

export type BillWithRelations = Bill & BillRelations;
