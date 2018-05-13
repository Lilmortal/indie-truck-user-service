import { User } from "../models";

export default interface UserRepository {
    get(user: User): User;
    update(user: User, updatedUser: User): void;
    delete(User: User): void;
}