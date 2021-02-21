import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { CustomerCard } from '../models';
import { CustomerCardRepository } from '../repositories';
export declare class CustomerCardController {
    archiveRepository: CustomerCardRepository;
    constructor(archiveRepository: CustomerCardRepository);
    create(archive: CustomerCard): Promise<CustomerCard>;
    count(where?: Where<CustomerCard>): Promise<Count>;
    find(filter?: Filter<CustomerCard>): Promise<CustomerCard[]>;
    updateAll(archive: CustomerCard, where?: Where<CustomerCard>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<CustomerCard>): Promise<CustomerCard>;
    updateById(id: string, archive: CustomerCard): Promise<void>;
    replaceById(id: string, archive: CustomerCard): Promise<void>;
    deleteById(id: string): Promise<void>;
}
