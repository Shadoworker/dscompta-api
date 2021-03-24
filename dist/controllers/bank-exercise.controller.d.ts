import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { BankExercise } from '../models';
import { BankExerciseRepository } from '../repositories';
export declare class BankExerciseController {
    archiveRepository: BankExerciseRepository;
    constructor(archiveRepository: BankExerciseRepository);
    create(archive: BankExercise): Promise<BankExercise>;
    count(where?: Where<BankExercise>): Promise<Count>;
    find(filter?: Filter<BankExercise>): Promise<BankExercise[]>;
    updateAll(archive: BankExercise, where?: Where<BankExercise>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<BankExercise>): Promise<BankExercise>;
    updateById(id: string, archive: BankExercise): Promise<void>;
    replaceById(id: string, archive: BankExercise): Promise<void>;
    deleteById(id: string): Promise<void>;
}
