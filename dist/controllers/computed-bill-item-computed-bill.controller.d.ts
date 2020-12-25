import { ComputedBillItem, ComputedBill } from '../models';
import { ComputedBillItemRepository } from '../repositories';
export declare class ComputedBillItemComputedBillController {
    computedBillItemRepository: ComputedBillItemRepository;
    constructor(computedBillItemRepository: ComputedBillItemRepository);
    getComputedBill(id: typeof ComputedBillItem.prototype.id): Promise<ComputedBill>;
}
