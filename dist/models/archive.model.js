"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archive = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const company_model_1 = require("./company.model");
let Archive = class Archive extends repository_1.Entity {
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
], Archive.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'object',
    }),
    tslib_1.__metadata("design:type", Object)
], Archive.prototype, "files", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: '$now',
    }),
    tslib_1.__metadata("design:type", Date)
], Archive.prototype, "created_at", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: '$now',
    }),
    tslib_1.__metadata("design:type", Date)
], Archive.prototype, "updated_at", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => company_model_1.Company),
    tslib_1.__metadata("design:type", String)
], Archive.prototype, "companyId", void 0);
Archive = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Archive);
exports.Archive = Archive;
//# sourceMappingURL=archive.model.js.map