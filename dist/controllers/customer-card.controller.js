"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCardController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CustomerCardController = class CustomerCardController {
    constructor(archiveRepository) {
        this.archiveRepository = archiveRepository;
    }
    async create(archive) {
        return this.archiveRepository.create(archive);
    }
    async count(where) {
        return this.archiveRepository.count(where);
    }
    async find(filter) {
        return this.archiveRepository.find(filter);
    }
    async updateAll(archive, where) {
        return this.archiveRepository.updateAll(archive, where);
    }
    async findById(id, filter) {
        return this.archiveRepository.findById(id, filter);
    }
    async updateById(id, archive) {
        await this.archiveRepository.updateById(id, archive);
    }
    async replaceById(id, archive) {
        await this.archiveRepository.replaceById(id, archive);
    }
    async deleteById(id) {
        await this.archiveRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/customer-cards', {
        responses: {
            '200': {
                description: 'CustomerCard model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.CustomerCard) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.CustomerCard, {
                    title: 'NewCustomerCard',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.CustomerCard]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCardController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/customer-cards/count', {
        responses: {
            '200': {
                description: 'CustomerCard model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.CustomerCard)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCardController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/customer-cards', {
        responses: {
            '200': {
                description: 'Array of CustomerCard model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.CustomerCard, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.CustomerCard)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCardController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/customer-cards', {
        responses: {
            '200': {
                description: 'CustomerCard PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.CustomerCard, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.CustomerCard)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.CustomerCard, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCardController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/customer-cards/{id}', {
        responses: {
            '200': {
                description: 'CustomerCard model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.CustomerCard, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.CustomerCard, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCardController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/customer-cards/{id}', {
        responses: {
            '204': {
                description: 'CustomerCard PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.CustomerCard, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.CustomerCard]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCardController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/customer-cards/{id}', {
        responses: {
            '204': {
                description: 'CustomerCard PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.CustomerCard]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCardController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/customer-cards/{id}', {
        responses: {
            '204': {
                description: 'CustomerCard DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCardController.prototype, "deleteById", null);
CustomerCardController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CustomerCardRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CustomerCardRepository])
], CustomerCardController);
exports.CustomerCardController = CustomerCardController;
//# sourceMappingURL=customer-card.controller.js.map