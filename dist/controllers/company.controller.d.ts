import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Company } from '../models';
import { CompanyRepository } from '../repositories';
export declare class CompanyController {
    CompanyRepository: CompanyRepository;
    constructor(CompanyRepository: CompanyRepository);
    create(Company: Omit<Company, 'id'>): Promise<Company>;
    count(where?: Where<Company>): Promise<Count>;
    find(filter?: Filter<Company>): Promise<Company[]>;
    updateAll(Company: Company, where?: Where<Company>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Company>): Promise<Company>;
    updateById(id: string, Company: Company): Promise<void>;
    replaceById(id: string, Company: Company): Promise<void>;
    deleteById(id: string): Promise<void>;
}
