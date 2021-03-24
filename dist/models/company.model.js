"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const bill_model_1 = require("./bill.model");
const user_model_1 = require("./user.model");
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
        default: 'mon-entreprise'
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "domain_name", void 0);
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
        default: ""
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "affiliatedId", void 0);
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
    repository_1.property({
        type: 'object',
        itemType: 'object'
    }),
    tslib_1.__metadata("design:type", Object)
], Company.prototype, "config", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'object',
        itemType: 'object',
        default: {
            name: "Trial",
            price: 0,
            access: 1,
            ds_scan: true,
            ds_bank: true,
            ds_archi: true,
            ds_ai: true,
            ds_fact: true
        }
    }),
    tslib_1.__metadata("design:type", Object)
], Company.prototype, "pack", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: '$now',
    }),
    tslib_1.__metadata("design:type", Date)
], Company.prototype, "created_at", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: '$now',
    }),
    tslib_1.__metadata("design:type", Date)
], Company.prototype, "updated_at", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        default: new Date().getFullYear()
    }),
    tslib_1.__metadata("design:type", Number)
], Company.prototype, "exercise_year", void 0);
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