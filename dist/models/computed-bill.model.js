"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedBill = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const computed_bill_item_model_1 = require("./computed-bill-item.model");
const company_model_1 = require("./company.model");
let ComputedBill = class ComputedBill extends repository_1.Entity {
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
], ComputedBill.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], ComputedBill.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], ComputedBill.prototype, "no_ref", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], ComputedBill.prototype, "from_name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], ComputedBill.prototype, "to_name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: "",
    }),
    tslib_1.__metadata("design:type", String)
], ComputedBill.prototype, "to_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], ComputedBill.prototype, "date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], ComputedBill.prototype, "to_address", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], ComputedBill.prototype, "no_order", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], ComputedBill.prototype, "deadline", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], ComputedBill.prototype, "total", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], ComputedBill.prototype, "logo", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: "bill",
    }),
    tslib_1.__metadata("design:type", String)
], ComputedBill.prototype, "type", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => computed_bill_item_model_1.ComputedBillItem),
    tslib_1.__metadata("design:type", Array)
], ComputedBill.prototype, "computedBillItems", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => company_model_1.Company),
    tslib_1.__metadata("design:type", String)
], ComputedBill.prototype, "companyId", void 0);
ComputedBill = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ComputedBill);
exports.ComputedBill = ComputedBill;
//# sourceMappingURL=computed-bill.model.js.map