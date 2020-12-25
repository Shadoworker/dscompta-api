"use strict";
var Tesseract_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tesseract = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Tesseract = Tesseract_1 = class Tesseract extends repository_1.Entity {
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
], Tesseract.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: Tesseract_1,
    }),
    tslib_1.__metadata("design:type", String)
], Tesseract.prototype, "title", void 0);
Tesseract = Tesseract_1 = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Tesseract);
exports.Tesseract = Tesseract;
//# sourceMappingURL=tesseract.model.js.map