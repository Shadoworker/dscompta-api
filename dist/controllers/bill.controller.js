"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BillController = class BillController {
    constructor(billRepository) {
        this.billRepository = billRepository;
    }
    async create(bill) {
        return this.billRepository.create(bill);
    }
    async count(where) {
        return this.billRepository.count(where);
    }
    async find(filter) {
        return this.billRepository.find(filter);
    }
    async updateAll(bill, where) {
        return this.billRepository.updateAll(bill, where);
    }
    async findById(id, filter) {
        return this.billRepository.findById(id, filter);
    }
    async updateById(id, bill) {
        await this.billRepository.updateById(id, bill);
    }
    async replaceById(id, bill) {
        await this.billRepository.replaceById(id, bill);
    }
    async deleteById(id) {
        await this.billRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/bills', {
        responses: {
            '200': {
                description: 'Bill model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Bill) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Bill, {
                    title: 'NewBill',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Bill]),
    tslib_1.__metadata("design:returntype", Promise)
], BillController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/bills/count', {
        responses: {
            '200': {
                description: 'Bill model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Bill)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BillController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/bills', {
        responses: {
            '200': {
                description: 'Array of Bill model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Bill, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Bill)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BillController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/bills', {
        responses: {
            '200': {
                description: 'Bill PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Bill, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Bill)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Bill, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BillController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/bills/{id}', {
        responses: {
            '200': {
                description: 'Bill model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Bill, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Bill, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BillController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/bills/{id}', {
        responses: {
            '204': {
                description: 'Bill PATCH success',
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
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Bill]),
    tslib_1.__metadata("design:returntype", Promise)
], BillController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/bills/{id}', {
        responses: {
            '204': {
                description: 'Bill PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Bill]),
    tslib_1.__metadata("design:returntype", Promise)
], BillController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/bills/{id}', {
        responses: {
            '204': {
                description: 'Bill DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], BillController.prototype, "deleteById", null);
BillController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.BillRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BillRepository])
], BillController);
exports.BillController = BillController;
//# sourceMappingURL=bill.controller.js.map