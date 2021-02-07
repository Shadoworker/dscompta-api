import {Entity, hasMany, model, property} from '@loopback/repository';
import {Bill} from './bill.model';
import {User} from './user.model';

@model({settings: {strict: false}})
export class Company extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  rcs: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    default: 'mon-entreprise'
  })
  domain_name?: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
    default: "accounting"
  })
  type: string;

  @property({
    type: 'string',
    default: ""
  })
  affiliatedId: string;

  @property({
    type: 'string',
  })
  owner_name?: string;

  @property({
    type: 'string',
  })
  owner_surname?: string;

  @property({
    type: 'string',
    required: true,
  })
  license: string;

  @property({
    type: 'boolean',
    default: true,
  })
  is_active?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  has_owner?: boolean;

  @property({
    type: 'object',
    itemType: 'object'
  })
  config?: object;

  @hasMany(() => User)
  users: User[];

  @hasMany(() => Bill)
  bills: Bill[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Company>) {
    super(data);
  }
}

export interface CompanyRelations {
  // describe navigational properties here
}

export type CompanyWithRelations = Company & CompanyRelations;
