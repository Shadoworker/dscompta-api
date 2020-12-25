import { DefaultCrudRepository } from '@loopback/repository';
import { Tesseract, TesseractRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class TesseractRepository extends DefaultCrudRepository<Tesseract, typeof Tesseract.prototype.id, TesseractRelations> {
    constructor(dataSource: DbDataSource);
}
