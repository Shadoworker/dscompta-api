"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankExercise = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let BankExercise = class BankExercise extends repository_1.Entity {
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
], BankExercise.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], BankExercise.prototype, "year", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        default: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], BankExercise.prototype, "closed", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], BankExercise.prototype, "companyId", void 0);
BankExercise = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], BankExercise);
exports.BankExercise = BankExercise;
//# sourceMappingURL=bank-exercise.model.js.map