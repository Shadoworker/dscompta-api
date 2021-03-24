import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { BankExercise, BankExerciseRelations } from '../models';
export declare class BankExerciseRepository extends DefaultCrudRepository<BankExercise, typeof BankExercise.prototype.id, BankExerciseRelations> {
    constructor(dataSource: DbDataSource);
}
