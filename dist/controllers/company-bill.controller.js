"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyBillController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CompanyBillController = class CompanyBillController {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async find(id, filter) {
        return this.companyRepository.bills(id).find(filter);
    }
    async create(id, bill) {
        return this.companyRepository.bills(id).create(bill);
    }
    async patch(id, bill, where) {
        return this.companyRepository.bills(id).patch(bill, where);
    }
    async delete(id, where) {
        return this.companyRepository.bills(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/companies/{id}/bills', {
        responses: {
            '200': {
                description: 'Array of Company has many Bill',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Bill) },
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
], CompanyBillController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/companies/{id}/bills', {
        responses: {
            '200': {
                description: 'Company model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Bill) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Bill, {
                    title: 'NewBillInCompany',
                    exclude: ['id'],
                    optional: ['companyId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyBillController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/companies/{id}/bills', {
        responses: {
            '200': {
                description: 'Company.Bill PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Bill, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Bill))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyBillController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/companies/{id}/bills', {
        responses: {
            '200': {
                description: 'Company.Bill DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Bill))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyBillController.prototype, "delete", null);
CompanyBillController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CompanyRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CompanyRepository])
], CompanyBillController);
exports.CompanyBillController = CompanyBillController;
//# sourceMappingURL=company-bill.controller.js.map