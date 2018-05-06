import { Router } from "express";

import v1 from "./api/v1";

export const router = Router();

interface VersionTypes {
    [version: string]: Router;
}

const VERSIONS: VersionTypes = {
    "/v1": v1,
};

Object.keys(VERSIONS).forEach(version => {
    router.use(version, VERSIONS[version]);
});