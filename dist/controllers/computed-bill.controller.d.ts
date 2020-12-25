import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ComputedBill } from '../models';
import { ComputedBillRepository } from '../repositories';
export declare class ComputedBillController {
    computedBillRepository: ComputedBillRepository;
    constructor(computedBillRepository: ComputedBillRepository);
    create(computedBill: Omit<ComputedBill, 'id'>): Promise<ComputedBill>;
    count(where?: Where<ComputedBill>): Promise<Count>;
    find(filter?: Filter<ComputedBill>): Promise<ComputedBill[]>;
    updateAll(computedBill: ComputedBill, where?: Where<ComputedBill>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<ComputedBill>): Promise<ComputedBill>;
    updateById(id: string, computedBill: ComputedBill): Promise<void>;
    replaceById(id: string, computedBill: ComputedBill): Promise<void>;
    deleteById(id: string): Promise<void>;
}
