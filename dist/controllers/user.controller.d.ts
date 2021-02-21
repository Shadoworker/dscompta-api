import { Count, Entity, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { User } from '../models';
import { UserRepository } from '../repositories';
declare class UserMail extends Entity {
    name?: string;
    customer_mail?: string;
    subject?: string;
    html?: string;
    username?: string;
    password?: string;
    constructor(data?: Partial<UserMail>);
}
export declare class UserController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    create(user: User): Promise<User>;
    count(where?: Where<User>): Promise<Count>;
    find(filter?: Filter<User>): Promise<User[]>;
    updateAll(user: User, where?: Where<User>): Promise<Count>;
    send_user_mail(data: UserMail): Promise<any>;
    findById(id: string, filter?: FilterExcludingWhere<User>): Promise<User>;
    updateById(id: string, user: User): Promise<void>;
    replaceById(id: string, user: User): Promise<void>;
    deleteById(id: string): Promise<void>;
}
export {};
