import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {BankExercise, BankExerciseRelations} from '../models';

export class BankExerciseRepository extends DefaultCrudRepository<
  BankExercise,
  typeof BankExercise.prototype.id,
  BankExerciseRelations
  > {


  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BankExercise, dataSource);
  }
}
