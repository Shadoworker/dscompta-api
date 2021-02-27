import {Entity, model, property} from '@loopback/repository';

@model()
export class BankExercise extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  year?: string;

  @property({
    type: 'boolean',
    default: true,
  })
  closed?: boolean;

  @property({
    type: 'string',
  })
  companyId?: string;

  constructor(data?: Partial<BankExercise>) {
    super(data);
  }
}

export interface BankExerciseRelations {
  // describe navigational properties here
}

export type BankExerciseWithRelations = BankExercise & BankExerciseRelations;
