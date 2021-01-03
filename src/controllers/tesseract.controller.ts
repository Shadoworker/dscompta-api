import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import axios, {AxiosRequestConfig} from 'axios';
import * as chrono from 'chrono-node';
import {Bill, Tesseract} from '../models';
import {TesseractRepository} from '../repositories';

var ocrad = require('async-ocrad');

let config: AxiosRequestConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  responseType: 'json'
};

let baseUrl = 'https://dscompta-api.herokuapp.com';

async function _updateBill(bill: any) {

  return await axios.patch(baseUrl + '/bills/' + bill.id, bill);

}

function _isDigit(n: any) {
  return Boolean([true, true, true, true, true, true, true, true, true, true][n]);
}

export class TesseractController {
  constructor(
    @repository(TesseractRepository)
    public tesseractRepository: TesseractRepository,
  ) { }




  // Map to `POST /tess`
  @post('/tess', {
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
  })

  async tess(@requestBody({
    content: {
      'application/json': {

        schema: [getModelSchemaRef(Bill, {
          title: 'NewUpload',
        })],
      },
    },
  })
  bills: Bill[]): Promise<any> {

    bills.forEach((bill) => {
      // var bill = bills[0];
      var uri = bill.uri || "";
      // var base64string = "";
      // base64string = uri.split(',')[1];
      // Update Status
      bill.status = "progress";

      // We Update the file status into "progress" ... For UI presets
      return _updateBill(bill).then(async (data) => {
        // ----------TESSERACT MAGIC------------
        // return {ex1 : "Ok"}

        var text = await ocrad('./.sandbox/' + uri);
        // console.log(text);

        // Search ....
        // Set keywords and update status to "success"

        let _text = text.toLowerCase();
        // --------------- TVA -------------
        let percentageSymbolIndex = _text.search("%");
        let tva = "";
        for (let charIndex = (percentageSymbolIndex - 1); charIndex >= 0; charIndex--) {
          const char = _text[charIndex];
          if (!_isDigit(char) && char != ".") break; // Avoid stopping at dot "."
          if (char == " ") break;
          tva = char + tva; // We are reading from RtL
          tva = tva.replace(/ /g, '');
        }
        if (tva.search('.') != -1) // Has Decimal part
        {
          var tva_int = tva.split('.')[0];
          var _tva = "";
          if (tva_int.length > 2) {
            _tva = tva_int[tva_int.length - 2] + tva_int[tva_int.length - 1]
            tva = _tva + "." + tva.split('.')[1];
          }
        }
        // Set To 0 if not found
        if (tva == "") tva = "0";
        // ---------------------------------
        // --------------- DATE -------------
        //@ts-ignore
        var date = new Date(bill.date);
        var firstDateStringIndex = _text.search("date");
        var seekablePart = _text.slice(firstDateStringIndex);
        date = chrono.fr.parseDate(seekablePart);
        // ----------------------------------
        // --------------- HT -------------
        let htStringIndex = _text.lastIndexOf("total ht") + 1; // To end the string
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
        let total;

        if (parseInt(tva) != NaN && parseInt(ht) != NaN) {

          total = parseInt(ht) + (parseInt(ht) * parseInt(tva) / 100);
        }
        else {

          total = "";

          for (let charIndex = (totalStringIndex + 1); charIndex < _text.length; charIndex++) {
            const char = _text[charIndex];
            if (!_isDigit(char) && char != "." && char != " ") // Avoid stopping at "."
              break;
            total = total + char; // Normal direction reading
            total = total.replace(/ /g, '');
          }

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

          total = parseInt(total);

        }

        // ----------------------------------
        // return {data : {ht : ht, tva : tva , ttc : total , date : date}}
        // UPDATE READ DATA
        var _ht = parseInt(ht);
        if (total == null || total == undefined || isNaN(total))
          total = 0;
        if (_ht == null || _ht == undefined || isNaN(_ht))
          _ht = 0;
        if (date == null || date == undefined)
          //@ts-ignore
          date = bill.date;

        bill.status = "success";
        bill.date = date;
        bill.ht = _ht;
        bill.tva = parseInt(tva);
        bill.ttc = total;

        // // console.log(bill)

        return _updateBill(bill).then((data) => {/* console.log("success") */}).catch((err) => {
          bill.status = "error";
          // console.log("err 1")
          _updateBill(bill).then((data) => { }).catch(() => {
            // console.log("err 2")
          });
        })


        // return {result: "Ok", text: text, tva: tva, date: date, ht: ht, ttc: total};

        /**/
        // }).catch((err) => {

        //   bill.status = "error";
        //   return _updateBill(bill).then((data) => { });

        // })

      }).catch((err) => {
        bill.status = "error";
        _updateBill(bill).then((data) => { }).catch(() => { });
      })


    }) // Foreach end
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




  @post('/tesseracts', {
    responses: {
      '200': {
        description: 'Tesseract model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tesseract)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tesseract, {
            title: 'NewTesseract',

          }),
        },
      },
    })
    tesseract: Tesseract,
  ): Promise<Tesseract> {
    return this.tesseractRepository.create(tesseract);
  }

  @get('/tesseracts/count', {
    responses: {
      '200': {
        description: 'Tesseract model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Tesseract) where?: Where<Tesseract>,
  ): Promise<Count> {
    return this.tesseractRepository.count(where);
  }

  @get('/tesseracts', {
    responses: {
      '200': {
        description: 'Array of Tesseract model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Tesseract, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Tesseract) filter?: Filter<Tesseract>,
  ): Promise<Tesseract[]> {
    return this.tesseractRepository.find(filter);
  }

  @patch('/tesseracts', {
    responses: {
      '200': {
        description: 'Tesseract PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tesseract, {partial: true}),
        },
      },
    })
    tesseract: Tesseract,
    @param.where(Tesseract) where?: Where<Tesseract>,
  ): Promise<Count> {
    return this.tesseractRepository.updateAll(tesseract, where);
  }

  @get('/tesseracts/{id}', {
    responses: {
      '200': {
        description: 'Tesseract model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Tesseract, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Tesseract, {exclude: 'where'}) filter?: FilterExcludingWhere<Tesseract>
  ): Promise<Tesseract> {
    return this.tesseractRepository.findById(id, filter);
  }

  @patch('/tesseracts/{id}', {
    responses: {
      '204': {
        description: 'Tesseract PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tesseract, {partial: true}),
        },
      },
    })
    tesseract: Tesseract,
  ): Promise<void> {
    await this.tesseractRepository.updateById(id, tesseract);
  }

  @put('/tesseracts/{id}', {
    responses: {
      '204': {
        description: 'Tesseract PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tesseract: Tesseract,
  ): Promise<void> {
    await this.tesseractRepository.replaceById(id, tesseract);
  }

  @del('/tesseracts/{id}', {
    responses: {
      '204': {
        description: 'Tesseract DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tesseractRepository.deleteById(id);
  }
}
