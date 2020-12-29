import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Bill, Tesseract } from '../models';
import { TesseractRepository } from '../repositories';
export declare class TesseractController {
    tesseractRepository: TesseractRepository;
    constructor(tesseractRepository: TesseractRepository);
    tess(bills: Bill[]): Promise<any>;
    create(tesseract: Tesseract): Promise<Tesseract>;
    count(where?: Where<Tesseract>): Promise<Count>;
    find(filter?: Filter<Tesseract>): Promise<Tesseract[]>;
    updateAll(tesseract: Tesseract, where?: Where<Tesseract>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Tesseract>): Promise<Tesseract>;
    updateById(id: string, tesseract: Tesseract): Promise<void>;
    replaceById(id: string, tesseract: Tesseract): Promise<void>;
    deleteById(id: string): Promise<void>;
}
