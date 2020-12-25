import { User, Company } from '../models';
import { UserRepository } from '../repositories';
export declare class UserCompanyController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    getCompany(id: typeof User.prototype.id): Promise<Company>;
}
