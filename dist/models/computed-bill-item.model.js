"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedBillItem = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const computed_bill_model_1 = require("./computed-bill.model");
let ComputedBillItem = class ComputedBillItem extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], ComputedBillItem.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], ComputedBillItem.prototype, "qty", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], ComputedBillItem.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], ComputedBillItem.prototype, "unit_price", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], ComputedBillItem.prototype, "total_ht", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], ComputedBillItem.prototype, "taxe", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => computed_bill_model_1.ComputedBill),
    tslib_1.__metadata("design:type", String)
], ComputedBillItem.prototype, "computedBillId", void 0);
ComputedBillItem = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ComputedBillItem);
exports.ComputedBillItem = ComputedBillItem;
//# sourceMappingURL=computed-bill-item.model.js.map