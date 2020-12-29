"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesseractController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const axios_1 = tslib_1.__importDefault(require("axios"));
const tesseract_js_1 = tslib_1.__importDefault(require("tesseract.js"));
const models_1 = require("../models");
const repositories_1 = require("../repositories");
var ocrad = require('async-ocrad');
let config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    responseType: 'json'
};
let baseUrl = 'https://dscomptaapi.herokuapp.com';
async function _updateBill(bill) {
    return await axios_1.default.patch(baseUrl + '/bills/' + bill.id, bill);
}
function _isDigit(n) {
    return Boolean([true, true, true, true, true, true, true, true, true, true][n]);
}
let TesseractController = class TesseractController {
    constructor(tesseractRepository) {
        this.tesseractRepository = tesseractRepository;
    }
    // Map to `POST /tess`
    async tess(bills) {
        bills.forEach((bill) => {
            var uri = bill.uri || "";
            var base64string = "";
            base64string = uri.split(',')[1];
            // Update Status
            bill.status = "progress";
            // We Update the file status into "progress" ... For UI presets
            return _updateBill(bill).then((data) => {
                // ----------TESSERACT MAGIC------------
                // return {ex1 : "Ok"}
                return tesseract_js_1.default.recognize(Buffer.from(base64string, 'base64'), 'eng', {})
                    .then(({ data: { text } }) => {
                    // Make search ....
                    // Set keywords and update status to "success"
                    let _text = text.toLowerCase();
                    // --------------- TVA -------------
                    let percentageSymbolIndex = _text.search("%");
                    let tva = "";
                    for (let charIndex = (percentageSymbolIndex - 1); charIndex >= 0; charIndex--) {
                        const char = _text[charIndex];
                        if (!_isDigit(char) && char != ".")
                            break; // Avoid stopping at dot "."
                        if (char == " ")
                            break;
                        tva = char + tva; // We are reading from RtL
                        tva = tva.replace(/ /g, '');
                    }
                    if (tva.search('.') != -1) // Has Decimal part
                     {
                        var tva_int = tva.split('.')[0];
                        var _tva = "";
                        if (tva_int.length > 2) {
                            _tva = tva_int[tva_int.length - 2] + tva_int[tva_int.length - 1];
                            tva = _tva + "." + tva.split('.')[1];
                        }
                    }
                    // ---------------------------------
                    // --------------- DATE -------------
                    let dateStringIndex = _text.search("date") + 3; // To end the string
                    let date = "";
                    var hasReachedInt = false;
                    for (let charIndex = (dateStringIndex + 1); charIndex < _text.length; charIndex++) {
                        const char = _text[charIndex];
                        // if(!_isDigit(char) && char != "/" && char != "-") // Avoid stopping at "/" or "-"
                        //   break;
                        if (hasReachedInt) {
                            if (!_isDigit(char) && char != "/" && char != "-" && char != " ")
                                break;
                        }
                        if (_isDigit(char) || char == "/" || char == "-") {
                            hasReachedInt = true;
                            date = date + char; // Normal direction reading
                            date = date.replace(/ /g, '');
                        }
                    }
                    // ----------------------------------
                    // --------------- HT -------------
                    let htStringIndex = _text.lastIndexOf("ht") + 1; // To end the string
                    let ht = "";
                    var hasReachedInt = false;
                    for (let charIndex = (htStringIndex + 1); charIndex < _text.length; charIndex++) {
                        const char = _text[charIndex];
                        if (hasReachedInt) {
                            if (!_isDigit(char) && char != "," && char != ".")
                                break;
                        }
                        if (_isDigit(char) || char == "," || char == ".") {
                            hasReachedInt = true;
                            ht = ht + char; // Normal direction reading
                            ht = ht.replace(/ /g, '');
                            ht = ht.replace(/,/g, '');
                        }
                    }
                    // ----------------------------------
                    // // --------------- TTC : Total -------------
                    let totalStringIndex = _text.lastIndexOf("total") + 4; // To end the string
                    let total = "";
                    // for (let charIndex = (totalStringIndex+1); charIndex < _text.length; charIndex++) {
                    //   const char = _text[charIndex];
                    //   if(!_isDigit(char) && char != "."  && char != " ") // Avoid stopping at "."
                    //     break;
                    //     total = total + char; // Normal direction reading
                    //     total = total.replace(/ /g,'');
                    // }
                    var hasReachedInt = false;
                    for (let charIndex = (totalStringIndex + 1); charIndex < _text.length; charIndex++) {
                        const char = _text[charIndex];
                        if (hasReachedInt) {
                            if (!_isDigit(char) && char != "," && char != ".")
                                break;
                        }
                        if (_isDigit(char) || char == "," || char == ".") {
                            hasReachedInt = true;
                            total = total + char; // Normal direction reading
                            total = total.replace(/ /g, '');
                            total = total.replace(/,/g, '');
                        }
                    }
                    // ----------------------------------
                    var dateParts = date.split("/");
                    var _d = new Date(dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0]);
                    // return {data : {ht : ht, tva : tva , ttc : total , date : date}}
                    // UPDATE READ DATA
                    bill.status = "success";
                    if (_d != undefined && _d != null)
                        bill.date = _d;
                    bill.ht = parseFloat(ht);
                    bill.tva = parseFloat(tva);
                    bill.ttc = parseFloat(total);
                    return _updateBill(bill).then((data) => { });
                    // return  {ex2 : "Ok", date : _d, tva : tva,  ht : ht, ttc : total}
                }).catch((err) => {
                    bill.status = "error";
                    return _updateBill(bill).then((data) => { });
                });
            });
        }); // Foreach end
        // return "processed";
    }
    // IF CANNOT CALL MODEL METHODS : INSTALL AXIOS AND SEND REQUEST TO THIS API WITH CORRECT PARAMS FOR BILL DATA UPDATE
    // dt: Bill): Promise<String> {
    //   var uri = dt.uri || "";
    //   var base64string = "";
    //   base64string = uri.split(',')[1];
    //   return TesseractService.recognize(
    //     Buffer.from(base64string, 'base64'),
    //     'eng',
    //     {}
    //     // Just want to treat data
    //   )
    //   .then(({data: {text}}) => {
    //     return text;
    //     // * HAS DATA
    //     // 1 - Save Ref of loaded image and obtained data
    //     //  |_____ Call a specific method for that SaveRef(image, data) --> Give Id and Append Type (Compta, Bill, Order, DebCard ...)
    //   })
    // }
    // @post('/ocradize', {
    //   responses: {
    //     '200': {
    //       description: 'File Read',
    //       content: {
    //         'application/json': {
    //           schema: {
    //             type: 'string',
    //             properties: {
    //               output: {
    //                 type: 'string'
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // })
    // async ocradize(@requestBody({
    //   content: {
    //     'application/json': {
    //       schema: getModelSchemaRef(Bill, {
    //         title: 'NewUpload',
    //       }),
    //     },
    //   },
    // })
    // bill: Bill): Promise<any> {
    //   var uri = bill.uri;
    //   const text = await ocrad(uri);
    //   console.log(text);
    //   return "processed";
    // }
    async create(tesseract) {
        return this.tesseractRepository.create(tesseract);
    }
    async count(where) {
        return this.tesseractRepository.count(where);
    }
    async find(filter) {
        return this.tesseractRepository.find(filter);
    }
    async updateAll(tesseract, where) {
        return this.tesseractRepository.updateAll(tesseract, where);
    }
    async findById(id, filter) {
        return this.tesseractRepository.findById(id, filter);
    }
    async updateById(id, tesseract) {
        await this.tesseractRepository.updateById(id, tesseract);
    }
    async replaceById(id, tesseract) {
        await this.tesseractRepository.replaceById(id, tesseract);
    }
    async deleteById(id) {
        await this.tesseractRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/tess', {
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
                schema: [rest_1.getModelSchemaRef(models_1.Bill, {
                        title: 'NewUpload',
                    })],
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", Promise)
], TesseractController.prototype, "tess", null);
tslib_1.__decorate([
    rest_1.post('/tesseracts', {
        responses: {
            '200': {
                description: 'Tesseract model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Tesseract) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tesseract, {
                    title: 'NewTesseract',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tesseract]),
    tslib_1.__metadata("design:returntype", Promise)
], TesseractController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/tesseracts/count', {
        responses: {
            '200': {
                description: 'Tesseract model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Tesseract)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TesseractController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/tesseracts', {
        responses: {
            '200': {
                description: 'Array of Tesseract model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Tesseract, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Tesseract)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TesseractController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/tesseracts', {
        responses: {
            '200': {
                description: 'Tesseract PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tesseract, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Tesseract)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tesseract, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TesseractController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/tesseracts/{id}', {
        responses: {
            '200': {
                description: 'Tesseract model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Tesseract, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Tesseract, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TesseractController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/tesseracts/{id}', {
        responses: {
            '204': {
                description: 'Tesseract PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Tesseract, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Tesseract]),
    tslib_1.__metadata("design:returntype", Promise)
], TesseractController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/tesseracts/{id}', {
        responses: {
            '204': {
                description: 'Tesseract PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Tesseract]),
    tslib_1.__metadata("design:returntype", Promise)
], TesseractController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/tesseracts/{id}', {
        responses: {
            '204': {
                description: 'Tesseract DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TesseractController.prototype, "deleteById", null);
TesseractController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.TesseractRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TesseractRepository])
], TesseractController);
exports.TesseractController = TesseractController;
//# sourceMappingURL=tesseract.controller.js.map