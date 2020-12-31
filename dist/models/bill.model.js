"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bill = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const company_model_1 = require("./company.model");
let Bill = class Bill extends repository_1.Entity {
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
], Bill.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: "",
    }),
    tslib_1.__metadata("design:type", String)
], Bill.prototype, "uri", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Bill.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: 'none',
    }),
    tslib_1.__metadata("design:type", String)
], Bill.prototype, "status", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: 'customer',
    }),
    tslib_1.__metadata("design:type", String)
], Bill.prototype, "type", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: '',
    }),
    tslib_1.__metadata("design:type", String)
], Bill.prototype, "no_piece", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: '$now',
    }),
    tslib_1.__metadata("design:type", Date)
], Bill.prototype, "date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: '',
    }),
    tslib_1.__metadata("design:type", String)
], Bill.prototype, "no_compte", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: '',
    }),
    tslib_1.__metadata("design:type", String)
], Bill.prototype, "libelle", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        default: -1,
    }),
    tslib_1.__metadata("design:type", Number)
], Bill.prototype, "ttc", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        default: -1,
    }),
    tslib_1.__metadata("design:type", Number)
], Bill.prototype, "ht", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        default: -1,
    }),
    tslib_1.__metadata("design:type", Number)
], Bill.prototype, "tva", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Bill.prototype, "is_archived", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Bill.prototype, "is_exported", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: '$now',
    }),
    tslib_1.__metadata("design:type", Date)
], Bill.prototype, "created_at", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: '$now',
    }),
    tslib_1.__metadata("design:type", Date)
], Bill.prototype, "updated_at", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => company_model_1.Company),
    tslib_1.__metadata("design:type", String)
], Bill.prototype, "companyId", void 0);
Bill = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Bill);
exports.Bill = Bill;
//# sourceMappingURL=bill.model.js.map