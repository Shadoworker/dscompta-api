"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_model_1 = require("./user.model");
const bill_model_1 = require("./bill.model");
let Company = class Company extends repository_1.Entity {
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
], Company.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "rcs", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "address", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        default: "accounting"
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "type", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "owner_name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "owner_surname", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "license", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        default: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Company.prototype, "is_active", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Company.prototype, "has_owner", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => user_model_1.User),
    tslib_1.__metadata("design:type", Array)
], Company.prototype, "users", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => bill_model_1.Bill),
    tslib_1.__metadata("design:type", Array)
], Company.prototype, "bills", void 0);
Company = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Company);
exports.Company = Company;
//# sourceMappingURL=company.model.js.map