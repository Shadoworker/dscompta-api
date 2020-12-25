import { Bill, Company } from '../models';
import { BillRepository } from '../repositories';
export declare class BillCompanyController {
    billRepository: BillRepository;
    constructor(billRepository: BillRepository);
    getCompany(id: typeof Bill.prototype.id): Promise<Company>;
}
