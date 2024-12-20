import { executeSqlQuery } from "../db-access/get-db-client.js";

export const getAllDiaryPosts  = async (response) => {
    executeSqlQuery('SELECT * FROM BlogPosts WHERE Type = \'Diary\' AND IsShown = 1 ORDER BY BlogId ASC', response);
}

export const getAllGeneralPosts  = async (response) => {
    executeSqlQuery('SELECT * FROM BlogPosts WHERE Type = \'General\' AND IsShown = 1 ORDER BY CreatedDate DESC', response);
}