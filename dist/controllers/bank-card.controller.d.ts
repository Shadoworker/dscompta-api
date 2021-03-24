import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { BankCard } from '../models';
import { BankCardRepository } from '../repositories';
export declare class BankCardController {
    archiveRepository: BankCardRepository;
    constructor(archiveRepository: BankCardRepository);
    create(archive: BankCard): Promise<BankCard>;
    count(where?: Where<BankCard>): Promise<Count>;
    find(filter?: Filter<BankCard>): Promise<BankCard[]>;
    updateAll(archive: BankCard, where?: Where<BankCard>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<BankCard>): Promise<BankCard>;
    updateById(id: string, archive: BankCard): Promise<void>;
    replaceById(id: string, archive: BankCard): Promise<void>;
    deleteById(id: string): Promise<void>;
}
