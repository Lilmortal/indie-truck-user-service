import { MongoClient, MongoError } from "mongodb";

import UserRepository from "./userRepository";
import { User } from "../models";

interface UserRepositoryImplParams {
    connectionString: string;
    connectionPort: string;
    dbName: string;
    username: string;
    password: string;
}

const COLLECTION = "users";

const errorHandling = (err: MongoError) => { if (err) { throw err; } };

const UserRepositoryImpl = async ({ connectionString, connectionPort, dbName, username, password }: UserRepositoryImplParams): Promise<UserRepository> => {
    const client = await MongoClient.connect(`mongodb://${username}:${password}@${connectionString}:${connectionPort}`);
    const db = client.db(dbName);

    return {
        get: (user: User) => {
            const retrievedUser: User = db.collection(COLLECTION).find(user).toArray()[0];
            return retrievedUser;
        },
        update: (user: User, updatedUser: User) => db.collection(COLLECTION).updateOne(user, updatedUser, errorHandling),
        delete: (user: User) => db.collection(COLLECTION).deleteOne(user),
    };
};
