"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedBillCompanyController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ComputedBillCompanyController = class ComputedBillCompanyController {
    constructor(computedBillRepository) {
        this.computedBillRepository = computedBillRepository;
    }
    async getCompany(id) {
        return this.computedBillRepository.company(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/computed-bills/{id}/company', {
        responses: {
            '200': {
                description: 'Company belonging to ComputedBill',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Company) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillCompanyController.prototype, "getCompany", null);
ComputedBillCompanyController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ComputedBillRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ComputedBillRepository])
], ComputedBillCompanyController);
exports.ComputedBillCompanyController = ComputedBillCompanyController;
//# sourceMappingURL=computed-bill-company.controller.js.map