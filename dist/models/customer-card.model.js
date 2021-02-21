"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCard = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let CustomerCard = class CustomerCard extends repository_1.Entity {
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
], CustomerCard.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'object',
    }),
    tslib_1.__metadata("design:type", Object)
], CustomerCard.prototype, "data", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        default: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], CustomerCard.prototype, "active", void 0);
CustomerCard = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], CustomerCard);
exports.CustomerCard = CustomerCard;
//# sourceMappingURL=customer-card.model.js.map