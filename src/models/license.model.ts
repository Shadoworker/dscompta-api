import {Entity, model, property} from '@loopback/repository';

@model()
export class License extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  is_used?: boolean;


  constructor(data?: Partial<License>) {
    super(data);
  }
}

export interface LicenseRelations {
  // describe navigational properties here
}

export type LicenseWithRelations = License & LicenseRelations;
