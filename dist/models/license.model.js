"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.License = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let License = class License extends repository_1.Entity {
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
], License.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    tslib_1.__metadata("design:type", Boolean)
], License.prototype, "is_used", void 0);
License = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], License);
exports.License = License;
//# sourceMappingURL=license.model.js.map