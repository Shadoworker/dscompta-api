"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LicenseController = class LicenseController {
    constructor(licenseRepository) {
        this.licenseRepository = licenseRepository;
    }
    async create(license) {
        return this.licenseRepository.create(license);
    }
    async count(where) {
        return this.licenseRepository.count(where);
    }
    async find(filter) {
        return this.licenseRepository.find(filter);
    }
    async updateAll(license, where) {
        return this.licenseRepository.updateAll(license, where);
    }
    async findById(id, filter) {
        return this.licenseRepository.findById(id, filter);
    }
    async updateById(id, license) {
        await this.licenseRepository.updateById(id, license);
    }
    async replaceById(id, license) {
        await this.licenseRepository.replaceById(id, license);
    }
    async deleteById(id) {
        await this.licenseRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/licenses', {
        responses: {
            '200': {
                description: 'License model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.License) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.License, {
                    title: 'NewLicense',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LicenseController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/licenses/count', {
        responses: {
            '200': {
                description: 'License model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.License)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LicenseController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/licenses', {
        responses: {
            '200': {
                description: 'Array of License model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.License, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.License)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LicenseController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/licenses', {
        responses: {
            '200': {
                description: 'License PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.License, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.License)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.License, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LicenseController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/licenses/{id}', {
        responses: {
            '200': {
                description: 'License model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.License, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.License, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LicenseController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/licenses/{id}', {
        responses: {
            '204': {
                description: 'License PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.License, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.License]),
    tslib_1.__metadata("design:returntype", Promise)
], LicenseController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/licenses/{id}', {
        responses: {
            '204': {
                description: 'License PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.License]),
    tslib_1.__metadata("design:returntype", Promise)
], LicenseController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/licenses/{id}', {
        responses: {
            '204': {
                description: 'License DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], LicenseController.prototype, "deleteById", null);
LicenseController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.LicenseRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LicenseRepository])
], LicenseController);
exports.LicenseController = LicenseController;
//# sourceMappingURL=license.controller.js.map