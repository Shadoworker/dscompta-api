"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let CompanyRepository = class CompanyRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, userRepositoryGetter, billRepositoryGetter, computedBillRepositoryGetter) {
        super(models_1.Company, dataSource);
        this.userRepositoryGetter = userRepositoryGetter;
        this.billRepositoryGetter = billRepositoryGetter;
        this.computedBillRepositoryGetter = computedBillRepositoryGetter;
        this.bills = this.createHasManyRepositoryFactoryFor('bills', billRepositoryGetter);
        this.registerInclusionResolver('bills', this.bills.inclusionResolver);
        this.users = this.createHasManyRepositoryFactoryFor('users', userRepositoryGetter);
        this.registerInclusionResolver('users', this.users.inclusionResolver);
    }
};
CompanyRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db')), tslib_1.__param(1, repository_1.repository.getter('UserRepository')), tslib_1.__param(2, repository_1.repository.getter('BillRepository')), tslib_1.__param(3, repository_1.repository.getter('ComputedBillRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function, Function])
], CompanyRepository);
exports.CompanyRepository = CompanyRepository;
//# sourceMappingURL=company.repository.js.map