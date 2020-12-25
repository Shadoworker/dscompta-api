import { Count, Filter, Where } from '@loopback/repository';
import { Company, User } from '../models';
import { CompanyRepository } from '../repositories';
export declare class CompanyUserController {
    protected CompanyRepository: CompanyRepository;
    constructor(CompanyRepository: CompanyRepository);
    find(id: string, filter?: Filter<User>): Promise<User[]>;
    create(id: typeof Company.prototype.id, user: Omit<User, 'id'>): Promise<User>;
    patch(id: string, user: Partial<User>, where?: Where<User>): Promise<Count>;
    delete(id: string, where?: Where<User>): Promise<Count>;
}
