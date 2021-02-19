import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Company} from './company.model';

@model({settings: {strict: false}})
export class User extends Entity {


  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    default: "customer"
  })
  type: string;

  @property({
    type: 'string',
    default: "Expert-comptable"
  })
  function: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    default: "Sebastien",
  })
  name?: string;

  @property({
    type: 'string',
    default: "Martinez",
  })
  surname?: string;

  @property({
    type: 'boolean',
    default: true,
  })
  is_active?: boolean;

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
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }

}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
