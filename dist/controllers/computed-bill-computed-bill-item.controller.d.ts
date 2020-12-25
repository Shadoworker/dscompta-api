import { Count, Filter, Where } from '@loopback/repository';
import { ComputedBill, ComputedBillItem } from '../models';
import { ComputedBillRepository } from '../repositories';
export declare class ComputedBillComputedBillItemController {
    protected computedBillRepository: ComputedBillRepository;
    constructor(computedBillRepository: ComputedBillRepository);
    find(id: string, filter?: Filter<ComputedBillItem>): Promise<ComputedBillItem[]>;
    create(id: typeof ComputedBill.prototype.id, computedBillItem: Omit<ComputedBillItem, 'id'>): Promise<ComputedBillItem>;
    patch(id: string, computedBillItem: Partial<ComputedBillItem>, where?: Where<ComputedBillItem>): Promise<Count>;
    delete(id: string, where?: Where<ComputedBillItem>): Promise<Count>;
}
