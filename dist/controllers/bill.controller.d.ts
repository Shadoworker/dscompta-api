import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Bill } from '../models';
import { BillRepository } from '../repositories';
export declare class BillController {
    billRepository: BillRepository;
    constructor(billRepository: BillRepository);
    create(bill: Bill): Promise<Bill>;
    count(where?: Where<Bill>): Promise<Count>;
    find(filter?: Filter<Bill>): Promise<Bill[]>;
    updateAll(bill: Bill, where?: Where<Bill>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Bill>): Promise<Bill>;
    updateById(id: string, bill: Bill): Promise<void>;
    replaceById(id: string, bill: Bill): Promise<void>;
    deleteById(id: string): Promise<void>;
}
