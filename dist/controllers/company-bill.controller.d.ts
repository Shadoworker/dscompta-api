import { Count, Filter, Where } from '@loopback/repository';
import { Company, Bill } from '../models';
import { CompanyRepository } from '../repositories';
export declare class CompanyBillController {
    protected companyRepository: CompanyRepository;
    constructor(companyRepository: CompanyRepository);
    find(id: string, filter?: Filter<Bill>): Promise<Bill[]>;
    create(id: typeof Company.prototype.id, bill: Omit<Bill, 'id'>): Promise<Bill>;
    patch(id: string, bill: Partial<Bill>, where?: Where<Bill>): Promise<Count>;
    delete(id: string, where?: Where<Bill>): Promise<Count>;
}
