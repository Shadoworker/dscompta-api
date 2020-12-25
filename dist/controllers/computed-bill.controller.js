"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedBillController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ComputedBillController = class ComputedBillController {
    constructor(computedBillRepository) {
        this.computedBillRepository = computedBillRepository;
    }
    async create(computedBill) {
        return this.computedBillRepository.create(computedBill);
    }
    async count(where) {
        return this.computedBillRepository.count(where);
    }
    async find(filter) {
        return this.computedBillRepository.find(filter);
    }
    async updateAll(computedBill, where) {
        return this.computedBillRepository.updateAll(computedBill, where);
    }
    async findById(id, filter) {
        return this.computedBillRepository.findById(id, filter);
    }
    async updateById(id, computedBill) {
        await this.computedBillRepository.updateById(id, computedBill);
    }
    async replaceById(id, computedBill) {
        await this.computedBillRepository.replaceById(id, computedBill);
    }
    async deleteById(id) {
        await this.computedBillRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/computed-bills', {
        responses: {
            '200': {
                description: 'ComputedBill model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ComputedBill) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ComputedBill, {
                    title: 'NewComputedBill',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/computed-bills/count', {
        responses: {
            '200': {
                description: 'ComputedBill model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ComputedBill)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/computed-bills', {
        responses: {
            '200': {
                description: 'Array of ComputedBill model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.ComputedBill, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ComputedBill)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/computed-bills', {
        responses: {
            '200': {
                description: 'ComputedBill PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ComputedBill, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ComputedBill)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ComputedBill, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/computed-bills/{id}', {
        responses: {
            '200': {
                description: 'ComputedBill model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.ComputedBill, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ComputedBill, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/computed-bills/{id}', {
        responses: {
            '204': {
                description: 'ComputedBill PATCH success',
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
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ComputedBill]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/computed-bills/{id}', {
        responses: {
            '204': {
                description: 'ComputedBill PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ComputedBill]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/computed-bills/{id}', {
        responses: {
            '204': {
                description: 'ComputedBill DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillController.prototype, "deleteById", null);
ComputedBillController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ComputedBillRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ComputedBillRepository])
], ComputedBillController);
exports.ComputedBillController = ComputedBillController;
//# sourceMappingURL=computed-bill.controller.js.map