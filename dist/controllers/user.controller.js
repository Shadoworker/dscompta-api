"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
var postmark = require("postmark");
// const worker = createWorker({
//   logger: m => console.log(m)
// });
let UserMail = class UserMail extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], UserMail.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], UserMail.prototype, "customer_mail", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], UserMail.prototype, "subject", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], UserMail.prototype, "html", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], UserMail.prototype, "username", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], UserMail.prototype, "password", void 0);
UserMail = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserMail);
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(user) {
        return this.userRepository.create(user);
    }
    async count(where) {
        return this.userRepository.count(where);
    }
    async find(filter) {
        return this.userRepository.find(filter);
    }
    async updateAll(user, where) {
        return this.userRepository.updateAll(user, where);
    }
    async send_user_mail(data) {
        // Send an email:
        var client = new postmark.ServerClient("32dc1cda-21fe-4f6d-a0bf-caa7e8441f16");
        var to = data.customer_mail;
        var subject = data.subject;
        var html = data.html;
        const text = await client.sendEmail({
            "From": "habibe@kayfo.games",
            "To": to,
            "Subject": subject,
            "HtmlBody": html,
            "TextBody": subject,
            "MessageStream": "outbound"
        });
        // console.log(text);
        return text;
    }
    async findById(id, filter) {
        return this.userRepository.findById(id, filter);
    }
    async updateById(id, user) {
        await this.userRepository.updateById(id, user);
    }
    async replaceById(id, user) {
        await this.userRepository.replaceById(id, user);
    }
    async deleteById(id) {
        await this.userRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/users', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.User) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, {
                    title: 'NewUser',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/users/count', {
        responses: {
            '200': {
                description: 'User model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.User)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'Array of User model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.User, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.User)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/users', {
        responses: {
            '200': {
                description: 'User PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.User)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.User, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.post('/send_user_mail', {
        responses: {
            '200': {
                description: 'File Read',
                content: {
                    'application/json': {
                        schema: {
                            type: 'string',
                            properties: {
                                output: {
                                    type: 'string'
                                }
                            }
                        }
                    }
                }
            }
        }
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(UserMail, {
                    title: 'UserCredentials',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserMail]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "send_user_mail", null);
tslib_1.__decorate([
    rest_1.get('/users/{id}', {
        responses: {
            '200': {
                description: 'User model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.User, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.User, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/users/{id}', {
        responses: {
            '204': {
                description: 'User PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/users/{id}', {
        responses: {
            '204': {
                description: 'User PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/users/{id}', {
        responses: {
            '204': {
                description: 'User DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "deleteById", null);
UserController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map