"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedBillComputedBillItemController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ComputedBillComputedBillItemController = class ComputedBillComputedBillItemController {
    constructor(computedBillRepository) {
        this.computedBillRepository = computedBillRepository;
    }
    async find(id, filter) {
        return this.computedBillRepository.computedBillItems(id).find(filter);
    }
    async create(id, computedBillItem) {
        return this.computedBillRepository.computedBillItems(id).create(computedBillItem);
    }
    async patch(id, computedBillItem, where) {
        return this.computedBillRepository.computedBillItems(id).patch(computedBillItem, where);
    }
    async delete(id, where) {
        return this.computedBillRepository.computedBillItems(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/computed-bills/{id}/computed-bill-items', {
        responses: {
            '200': {
                description: 'Array of ComputedBill has many ComputedBillItem',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.ComputedBillItem) },
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
], ComputedBillComputedBillItemController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/computed-bills/{id}/computed-bill-items', {
        responses: {
            '200': {
                description: 'ComputedBill model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ComputedBillItem) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ComputedBillItem, {
                    title: 'NewComputedBillItemInComputedBill',
                    exclude: ['id'],
                    optional: ['computedBillId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillComputedBillItemController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/computed-bills/{id}/computed-bill-items', {
        responses: {
            '200': {
                description: 'ComputedBill.ComputedBillItem PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ComputedBillItem, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ComputedBillItem))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillComputedBillItemController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/computed-bills/{id}/computed-bill-items', {
        responses: {
            '200': {
                description: 'ComputedBill.ComputedBillItem DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ComputedBillItem))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillComputedBillItemController.prototype, "delete", null);
ComputedBillComputedBillItemController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ComputedBillRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ComputedBillRepository])
], ComputedBillComputedBillItemController);
exports.ComputedBillComputedBillItemController = ComputedBillComputedBillItemController;
//# sourceMappingURL=computed-bill-computed-bill-item.controller.js.map