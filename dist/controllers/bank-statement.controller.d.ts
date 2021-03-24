import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { BankStatement } from '../models';
import { BankStatementRepository } from '../repositories';
export declare class BankStatementController {
    archiveRepository: BankStatementRepository;
    constructor(archiveRepository: BankStatementRepository);
    create(archive: BankStatement): Promise<BankStatement>;
    count(where?: Where<BankStatement>): Promise<Count>;
    find(filter?: Filter<BankStatement>): Promise<BankStatement[]>;
    updateAll(archive: BankStatement, where?: Where<BankStatement>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<BankStatement>): Promise<BankStatement>;
    updateById(id: string, archive: BankStatement): Promise<void>;
    replaceById(id: string, archive: BankStatement): Promise<void>;
    deleteById(id: string): Promise<void>;
}
