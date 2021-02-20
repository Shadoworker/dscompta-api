"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const company_model_1 = require("./company.model");
let User = class User extends repository_1.Entity {
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
], User.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        default: "customer"
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "type", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: "Expert-comptable"
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "function", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "customer_email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: "Sebastien",
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: "Martinez",
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "surname", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        default: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "is_active", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: '$now',
    }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "created_at", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: '$now',
    }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => company_model_1.Company),
    tslib_1.__metadata("design:type", String)
], User.prototype, "companyId", void 0);
User = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map