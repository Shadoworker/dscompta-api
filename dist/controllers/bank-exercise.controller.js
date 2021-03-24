"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankExerciseController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BankExerciseController = class BankExerciseController {
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
    rest_1.post('/bank-exercises', {
        responses: {
            '200': {
                description: 'BankExercise model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.BankExercise) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.BankExercise, {
                    title: 'NewBankExercise',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.BankExercise]),
    tslib_1.__metadata("design:returntype", Promise)
], BankExerciseController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/bank-exercises/count', {
        responses: {
            '200': {
                description: 'BankExercise model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.BankExercise)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BankExerciseController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/bank-exercises', {
        responses: {
            '200': {
                description: 'Array of BankExercise model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.BankExercise, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.BankExercise)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BankExerciseController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/bank-exercises', {
        responses: {
            '200': {
                description: 'BankExercise PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.BankExercise, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.BankExercise)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.BankExercise, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BankExerciseController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/bank-exercises/{id}', {
        responses: {
            '200': {
                description: 'BankExercise model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.BankExercise, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.BankExercise, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BankExerciseController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/bank-exercises/{id}', {
        responses: {
            '204': {
                description: 'BankExercise PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.BankExercise, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.BankExercise]),
    tslib_1.__metadata("design:returntype", Promise)
], BankExerciseController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/bank-exercises/{id}', {
        responses: {
            '204': {
                description: 'BankExercise PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.BankExercise]),
    tslib_1.__metadata("design:returntype", Promise)
], BankExerciseController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/bank-exercises/{id}', {
        responses: {
            '204': {
                description: 'BankExercise DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], BankExerciseController.prototype, "deleteById", null);
BankExerciseController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.BankExerciseRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BankExerciseRepository])
], BankExerciseController);
exports.BankExerciseController = BankExerciseController;
//# sourceMappingURL=bank-exercise.controller.js.map