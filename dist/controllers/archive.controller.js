"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ArchiveController = class ArchiveController {
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
    rest_1.post('/archives', {
        responses: {
            '200': {
                description: 'Archive model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Archive) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Archive, {
                    title: 'NewArchive',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Archive]),
    tslib_1.__metadata("design:returntype", Promise)
], ArchiveController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/archives/count', {
        responses: {
            '200': {
                description: 'Archive model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Archive)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArchiveController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/archives', {
        responses: {
            '200': {
                description: 'Array of Archive model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Archive, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Archive)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArchiveController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/archives', {
        responses: {
            '200': {
                description: 'Archive PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Archive, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Archive)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Archive, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArchiveController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/archives/{id}', {
        responses: {
            '200': {
                description: 'Archive model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Archive, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Archive, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArchiveController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/archives/{id}', {
        responses: {
            '204': {
                description: 'Archive PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Archive, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Archive]),
    tslib_1.__metadata("design:returntype", Promise)
], ArchiveController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/archives/{id}', {
        responses: {
            '204': {
                description: 'Archive PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Archive]),
    tslib_1.__metadata("design:returntype", Promise)
], ArchiveController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/archives/{id}', {
        responses: {
            '204': {
                description: 'Archive DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ArchiveController.prototype, "deleteById", null);
ArchiveController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ArchiveRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ArchiveRepository])
], ArchiveController);
exports.ArchiveController = ArchiveController;
//# sourceMappingURL=archive.controller.js.map