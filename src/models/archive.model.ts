import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Company} from './company.model';

@model()
export class Archive extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'object'
  })
  files?: object;

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


  constructor(data?: Partial<Archive>) {
    super(data);
  }
}

export interface ArchiveRelations {
  // describe navigational properties here
}

export type ArchiveWithRelations = Archive & ArchiveRelations;
