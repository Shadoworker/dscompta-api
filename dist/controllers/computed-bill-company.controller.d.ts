import { ComputedBill, Company } from '../models';
import { ComputedBillRepository } from '../repositories';
export declare class ComputedBillCompanyController {
    computedBillRepository: ComputedBillRepository;
    constructor(computedBillRepository: ComputedBillRepository);
    getCompany(id: typeof ComputedBill.prototype.id): Promise<Company>;
}
