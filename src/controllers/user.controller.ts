import {
  Count,
  CountSchema,



  Entity, Filter,
  FilterExcludingWhere,

  model, property, repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {User} from '../models';
import {UserRepository} from '../repositories';
var postmark = require("postmark");

// const worker = createWorker({
//   logger: m => console.log(m)
// });


@model()
class UserMail extends Entity {

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  customer_mail?: string;

  @property({
    type: 'string',
  })
  subject?: string;

  @property({
    type: 'string',
  })
  html?: string;

  @property({
    type: 'string',
  })
  username?: string;

  @property({
    type: 'string',
  })
  password?: string;

  constructor(data?: Partial<UserMail>) {
    super(data);
  }
}

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }


  @post('/users', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUser',

          }),
        },
      },
    })
    user: User,
  ): Promise<User> {
    return this.userRepository.create(user);
  }

  @get('/users/count', {
    responses: {
      '200': {
        description: 'User model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(User) where?: Where<User>,
  ): Promise<Count> {
    return this.userRepository.count(where);
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'Array of User model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(User, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(User) filter?: Filter<User>,
  ): Promise<User[]> {
    return this.userRepository.find(filter);
  }

  @patch('/users', {
    responses: {
      '200': {
        description: 'User PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: User,
    @param.where(User) where?: Where<User>,
  ): Promise<Count> {
    return this.userRepository.updateAll(user, where);
  }



  @post('/send_user_mail', {
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

  async send_user_mail(@requestBody({
    content: {
      'application/json': {

        schema: getModelSchemaRef(UserMail, {
          title: 'UserCredentials',
        }),
      },
    },
  })
  data: UserMail): Promise<any> {

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

    console.log(text);

    return "processed";

  }




  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(User, {exclude: 'where'}) filter?: FilterExcludingWhere<User>
  ): Promise<User> {
    return this.userRepository.findById(id, filter);
  }

  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'User PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: User,
  ): Promise<void> {
    await this.userRepository.updateById(id, user);
  }

  @put('/users/{id}', {
    responses: {
      '204': {
        description: 'User PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() user: User,
  ): Promise<void> {
    await this.userRepository.replaceById(id, user);
  }

  @del('/users/{id}', {
    responses: {
      '204': {
        description: 'User DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userRepository.deleteById(id);
  }
}
