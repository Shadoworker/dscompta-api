"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedBillItemComputedBillController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ComputedBillItemComputedBillController = class ComputedBillItemComputedBillController {
    constructor(computedBillItemRepository) {
        this.computedBillItemRepository = computedBillItemRepository;
    }
    async getComputedBill(id) {
        return this.computedBillItemRepository.computedBill(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/computed-bill-items/{id}/computed-bill', {
        responses: {
            '200': {
                description: 'ComputedBill belonging to ComputedBillItem',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.ComputedBill) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComputedBillItemComputedBillController.prototype, "getComputedBill", null);
ComputedBillItemComputedBillController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ComputedBillItemRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ComputedBillItemRepository])
], ComputedBillItemComputedBillController);
exports.ComputedBillItemComputedBillController = ComputedBillItemComputedBillController;
//# sourceMappingURL=computed-bill-item-computed-bill.controller.js.map