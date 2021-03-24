"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankStatement = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let BankStatement = class BankStatement extends repository_1.Entity {
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
], BankStatement.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], BankStatement.prototype, "filename", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], BankStatement.prototype, "month", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], BankStatement.prototype, "year", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: '$now',
    }),
    tslib_1.__metadata("design:type", Date)
], BankStatement.prototype, "date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'object',
    }),
    tslib_1.__metadata("design:type", Object)
], BankStatement.prototype, "data", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        default: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], BankStatement.prototype, "active", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], BankStatement.prototype, "companyId", void 0);
BankStatement = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], BankStatement);
exports.BankStatement = BankStatement;
//# sourceMappingURL=bank-statement.model.js.map