import { Count, Filter, Where } from '@loopback/repository';
import { Company, ComputedBill } from '../models';
import { CompanyRepository } from '../repositories';
export declare class CompanyComputedBillController {
    protected companyRepository: CompanyRepository;
    constructor(companyRepository: CompanyRepository);
    find(id: string, filter?: Filter<ComputedBill>): Promise<ComputedBill[]>;
    create(id: typeof Company.prototype.id, computedBill: Omit<ComputedBill, 'id'>): Promise<ComputedBill>;
    patch(id: string, computedBill: Partial<ComputedBill>, where?: Where<ComputedBill>): Promise<Count>;
    delete(id: string, where?: Where<ComputedBill>): Promise<Count>;
}
