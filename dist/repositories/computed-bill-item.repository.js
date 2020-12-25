"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedBillItemRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let ComputedBillItemRepository = class ComputedBillItemRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, computedBillRepositoryGetter) {
        super(models_1.ComputedBillItem, dataSource);
        this.computedBillRepositoryGetter = computedBillRepositoryGetter;
        this.computedBill = this.createBelongsToAccessorFor('computedBill', computedBillRepositoryGetter);
        this.registerInclusionResolver('computedBill', this.computedBill.inclusionResolver);
    }
};
ComputedBillItemRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db')), tslib_1.__param(1, repository_1.repository.getter('ComputedBillRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], ComputedBillItemRepository);
exports.ComputedBillItemRepository = ComputedBillItemRepository;
//# sourceMappingURL=computed-bill-item.repository.js.map