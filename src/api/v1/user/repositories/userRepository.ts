import { User } from "../models";

export default interface UserRepository {
    get(user: User): Promise<User[]>;
    update(user: User, updatedUser: User): void;
    delete(User: User): void;
}