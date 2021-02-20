import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Archive } from '../models';
import { ArchiveRepository } from '../repositories';
export declare class ArchiveController {
    archiveRepository: ArchiveRepository;
    constructor(archiveRepository: ArchiveRepository);
    create(archive: Archive): Promise<Archive>;
    count(where?: Where<Archive>): Promise<Count>;
    find(filter?: Filter<Archive>): Promise<Archive[]>;
    updateAll(archive: Archive, where?: Where<Archive>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Archive>): Promise<Archive>;
    updateById(id: string, archive: Archive): Promise<void>;
    replaceById(id: string, archive: Archive): Promise<void>;
    deleteById(id: string): Promise<void>;
}
