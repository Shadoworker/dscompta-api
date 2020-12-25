import {DefaultCrudRepository} from '@loopback/repository';
import {Tesseract, TesseractRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TesseractRepository extends DefaultCrudRepository<
  Tesseract,
  typeof Tesseract.prototype.id,
  TesseractRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Tesseract, dataSource);
  }
}
