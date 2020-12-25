"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
// import {InterventionRepository} from './intervention.repository';
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    // public readonly interventions: HasManyRepositoryFactory<Intervention, typeof User.prototype.id>;
    constructor(dataSource, /*@repository.getter('InterventionRepository') protected interventionRepositoryGetter: Getter<InterventionRepository>,*/ billRepositoryGetter, /*@repository.getter('InterventionRepository') protected interventionRepositoryGetter: Getter<InterventionRepository>,*/ companyRepositoryGetter) {
        super(models_1.User, dataSource);
        this.billRepositoryGetter = billRepositoryGetter;
        this.companyRepositoryGetter = companyRepositoryGetter;
        this.company = this.createBelongsToAccessorFor('company', companyRepositoryGetter);
        this.registerInclusionResolver('company', this.company.inclusionResolver);
    }
};
UserRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db')), tslib_1.__param(1, repository_1.repository.getter('BillRepository')), tslib_1.__param(2, repository_1.repository.getter('CompanyRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map