"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let BillRepository = class BillRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, userRepositoryGetter, companyRepositoryGetter) {
        super(models_1.Bill, dataSource);
        this.userRepositoryGetter = userRepositoryGetter;
        this.companyRepositoryGetter = companyRepositoryGetter;
        this.company = this.createBelongsToAccessorFor('company', companyRepositoryGetter);
        this.registerInclusionResolver('company', this.company.inclusionResolver);
    }
};
BillRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db')), tslib_1.__param(1, repository_1.repository.getter('UserRepository')), tslib_1.__param(2, repository_1.repository.getter('CompanyRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function])
], BillRepository);
exports.BillRepository = BillRepository;
//# sourceMappingURL=bill.repository.js.map