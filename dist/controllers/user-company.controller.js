"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCompanyController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserCompanyController = class UserCompanyController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getCompany(id) {
        return this.userRepository.company(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/users/{id}/company', {
        responses: {
            '200': {
                description: 'Company belonging to User',
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
], UserCompanyController.prototype, "getCompany", null);
UserCompanyController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserCompanyController);
exports.UserCompanyController = UserCompanyController;
//# sourceMappingURL=user-company.controller.js.map