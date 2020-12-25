"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyComputedBillController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CompanyComputedBillController = class CompanyComputedBillController {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async find(id, filter) {
        return this.companyRepository.computedBills(id).find(filter);
    }
    async create(id, computedBill) {
        return this.companyRepository.computedBills(id).create(computedBill);
    }
    async patch(id, computedBill, where) {
        return this.companyRepository.computedBills(id).patch(computedBill, where);
    }
    async delete(id, where) {
        return this.companyRepository.computedBills(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/companies/{id}/computed-bills', {
        responses: {
            '200': {
                description: 'Array of Company has many ComputedBill',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.ComputedBill) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyComputedBillController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/companies/{id}/computed-bills', {
        responses: {
            '200': {
                description: 'Company model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ComputedBill) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ComputedBill, {
                    title: 'NewComputedBillInCompany',
                    exclude: ['id'],
                    optional: ['companyId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyComputedBillController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/companies/{id}/computed-bills', {
        responses: {
            '200': {
                description: 'Company.ComputedBill PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ComputedBill, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ComputedBill))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyComputedBillController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/companies/{id}/computed-bills', {
        responses: {
            '200': {
                description: 'Company.ComputedBill DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ComputedBill))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyComputedBillController.prototype, "delete", null);
CompanyComputedBillController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CompanyRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CompanyRepository])
], CompanyComputedBillController);
exports.CompanyComputedBillController = CompanyComputedBillController;
//# sourceMappingURL=company-computed-bill.controller.js.map