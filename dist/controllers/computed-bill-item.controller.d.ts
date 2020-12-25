import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ComputedBillItem } from '../models';
import { ComputedBillItemRepository } from '../repositories';
export declare class ComputedBillItemController {
    computedBillItemRepository: ComputedBillItemRepository;
    constructor(computedBillItemRepository: ComputedBillItemRepository);
    create(computedBillItem: Omit<ComputedBillItem, 'id'>): Promise<ComputedBillItem>;
    count(where?: Where<ComputedBillItem>): Promise<Count>;
    find(filter?: Filter<ComputedBillItem>): Promise<ComputedBillItem[]>;
    updateAll(computedBillItem: ComputedBillItem, where?: Where<ComputedBillItem>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<ComputedBillItem>): Promise<ComputedBillItem>;
    updateById(id: string, computedBillItem: ComputedBillItem): Promise<void>;
    replaceById(id: string, computedBillItem: ComputedBillItem): Promise<void>;
    deleteById(id: string): Promise<void>;
}
