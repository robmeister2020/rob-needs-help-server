import { executeSqlQuery } from "../db-access/get-db-client.js";

export const getAllCrisisResources = async (response) => {
    executeSqlQuery('SELECT * FROM CrisisResources', response);
}