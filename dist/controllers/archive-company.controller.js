"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveCompanyController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ArchiveCompanyController = class ArchiveCompanyController {
    constructor(archiveRepository) {
        this.archiveRepository = archiveRepository;
    }
    async getCompany(id) {
        return this.archiveRepository.company(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/archives/{id}/company', {
        responses: {
            '200': {
                description: 'Company belonging to Archive',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Company) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArchiveCompanyController.prototype, "getCompany", null);
ArchiveCompanyController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ArchiveRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ArchiveRepository])
], ArchiveCompanyController);
exports.ArchiveCompanyController = ArchiveCompanyController;
//# sourceMappingURL=archive-company.controller.js.map