"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedBillRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let ComputedBillRepository = class ComputedBillRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, computedBillItemRepositoryGetter, companyRepositoryGetter) {
        super(models_1.ComputedBill, dataSource);
        this.computedBillItemRepositoryGetter = computedBillItemRepositoryGetter;
        this.companyRepositoryGetter = companyRepositoryGetter;
        this.company = this.createBelongsToAccessorFor('company', companyRepositoryGetter);
        this.registerInclusionResolver('company', this.company.inclusionResolver);
        this.computedBillItems = this.createHasManyRepositoryFactoryFor('computedBillItems', computedBillItemRepositoryGetter);
        this.registerInclusionResolver('computedBillItems', this.computedBillItems.inclusionResolver);
    }
};
ComputedBillRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db')), tslib_1.__param(1, repository_1.repository.getter('ComputedBillItemRepository')), tslib_1.__param(2, repository_1.repository.getter('CompanyRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function])
], ComputedBillRepository);
exports.ComputedBillRepository = ComputedBillRepository;
//# sourceMappingURL=computed-bill.repository.js.map