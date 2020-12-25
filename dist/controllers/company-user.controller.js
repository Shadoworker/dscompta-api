"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CompanyUserController = class CompanyUserController {
    constructor(CompanyRepository) {
        this.CompanyRepository = CompanyRepository;
    }
    async find(id, filter) {
        return this.CompanyRepository.users(id).find(filter);
    }
    async create(id, user) {
        return this.CompanyRepository.users(id).create(user);
    }
    async patch(id, user, where) {
        return this.CompanyRepository.users(id).patch(user, where);
    }
    async delete(id, where) {
        return this.CompanyRepository.users(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/companies/{id}/users', {
        responses: {
            '200': {
                description: 'Array of Company has many User',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.User) },
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
], CompanyUserController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/companies/{id}/users', {
        responses: {
            '200': {
                description: 'Company model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.User) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, {
                    title: 'NewUserInCompany',
                    exclude: ['id'],
                    optional: ['CompanyId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyUserController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/companies/{id}/users', {
        responses: {
            '200': {
                description: 'Company.User PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.User))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyUserController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/companies/{id}/users', {
        responses: {
            '200': {
                description: 'Company.User DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.User))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyUserController.prototype, "delete", null);
CompanyUserController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CompanyRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CompanyRepository])
], CompanyUserController);
exports.CompanyUserController = CompanyUserController;
//# sourceMappingURL=company-user.controller.js.map