"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedBillItemController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ComputedBillItemController = class ComputedBillItemController {
    constructor(computedBillItemRepository) {
        this.computedBillItemRepository = computedBillItemRepository;
    }
    async create(computedBillItem) {
        return this.computedBillItemRepository.create(computedBillItem);
    }
    async count(where) {
        return this.computedBillItemRepository.count(where);
    }
    async find(filter) {
        return this.computedBillItemRepository.find(filter);
    }
    async updateAll(computedBillItem, where) {
        return this.computedBillItemRepository.updateAll(computedBillItem, where);
    }
    async findById(id, filter) {
        return this.computedBillItemRepository.findById(id, filter);
    }
    async updateById(id, computedBillItem) {
        await this.computedBillItemRepository.updateById(id, computedBillItem);
    }
    async replaceById(id, computedBillItem) {
        await this.computedBillItemRepository.replaceById(id, computedBillItem);
    }
    async deleteById(id) {
        await this.computedBillItemRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/computed-bill-items', {
        responses: {
            '200': {
                description: 'ComputedBillItem model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ComputedBillItem) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ComputedBillItem, {
                    title: 'NewComputedBillItem',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillItemController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/computed-bill-items/count', {
        responses: {
            '200': {
                description: 'ComputedBillItem model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ComputedBillItem)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillItemController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/computed-bill-items', {
        responses: {
            '200': {
                description: 'Array of ComputedBillItem model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.ComputedBillItem, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ComputedBillItem)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillItemController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/computed-bill-items', {
        responses: {
            '200': {
                description: 'ComputedBillItem PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ComputedBillItem, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ComputedBillItem)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ComputedBillItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillItemController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/computed-bill-items/{id}', {
        responses: {
            '200': {
                description: 'ComputedBillItem model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.ComputedBillItem, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ComputedBillItem, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillItemController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/computed-bill-items/{id}', {
        responses: {
            '204': {
                description: 'ComputedBillItem PATCH success',
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
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ComputedBillItem]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillItemController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/computed-bill-items/{id}', {
        responses: {
            '204': {
                description: 'ComputedBillItem PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ComputedBillItem]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillItemController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/computed-bill-items/{id}', {
        responses: {
            '204': {
                description: 'ComputedBillItem DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillItemController.prototype, "deleteById", null);
ComputedBillItemController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ComputedBillItemRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ComputedBillItemRepository])
], ComputedBillItemController);
exports.ComputedBillItemController = ComputedBillItemController;
//# sourceMappingURL=computed-bill-item.controller.js.map