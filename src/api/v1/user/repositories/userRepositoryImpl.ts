import { MongoClient, MongoError } from "mongodb";

import UserRepository from "./userRepository";
import { User } from "../models";

interface UserRepositoryImplParams {
    connectionString: string;
    connectionPort: number;
    dbName: string;
    collection: string;
    username: string;
    password: string;
}

const UserRepositoryImpl = async ({ connectionString, connectionPort, dbName, collection, username, password }: UserRepositoryImplParams): Promise<UserRepository> => {
    const client = await MongoClient.connect(`mongodb://${username}:${password}@${connectionString}:${connectionPort}`);
    const db = client.db(dbName);

    return {
        get: (user: User) => db.collection(collection).find(user).toArray(),
        update: (user: User, updatedUser: User) => db.collection(collection).updateOne(user, updatedUser),
        delete: (user: User) => db.collection(collection).deleteOne(user),
    };
};

export default UserRepositoryImpl;
