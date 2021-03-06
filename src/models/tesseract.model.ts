import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Tesseract extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    default: Tesseract,
  })
  title?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tesseract>) {
    super(data);
  }
}

export interface TesseractRelations {
  // describe navigational properties here
}

export type TesseractWithRelations = Tesseract & TesseractRelations;
