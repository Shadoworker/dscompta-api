import { Archive, Company } from '../models';
import { ArchiveRepository } from '../repositories';
export declare class ArchiveCompanyController {
    archiveRepository: ArchiveRepository;
    constructor(archiveRepository: ArchiveRepository);
    getCompany(id: typeof Archive.prototype.id): Promise<Company>;
}
