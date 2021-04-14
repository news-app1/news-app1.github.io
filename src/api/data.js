import * as api from './api.js';

export const host = 'https://parseapi.back4app.com';

api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

function createPointer(name, id) {

    return {
        __type: 'Pointer',
        'className': name,
        objectId: id
    }
}

function addOwner(object) {
    const userId = sessionStorage.getItem('userId');
    const result = Object.assign({}, object);
    result.owner = createPointer('_User', userId);
    return result;
}

export async function getAllRecords() {
    const records = await api.get(host + '/classes/News');
    return records.results;
}

export async function getAllRecentRecords() {
    const records = await api.get(host + '/classes/News?order=-createdAt');
    return records.results;
}
export async function getOldestRecordsFirst() {
    const records = await api.get(host + '/classes/News?order=createdAt');
    return records.results;
}
export async function recordsByTitleAscending() {
    const records = await api.get(host + '/classes/News?order=title');
    return records.results;
}
export async function recordsByTitleDecending() {
    const records = await await api.get(host + '/classes/News?order=-title');;
    return records.results;
}
export async function searchRecords(query) {
    const convertedQuery = JSON.stringify({ "title": { "$regex": query } });
    const response = await api.get(host + '/classes/News?where=' + encodeURIComponent(convertedQuery));
    return response.results
}

/*

*/
export async function getRecordById(id) {
    return await api.get(host + '/classes/News/' + id + `?include=owner`);
}

export async function editRecord(id, data) {
    return await api.put(host + '/classes/News/' + id, data);
}

export async function createRecord(data) {
    const body = addOwner(data)
    return await api.post(host + '/classes/News', body);
}


export async function deleteRecord(id) {
    return await api.del(host + '/classes/News/' + id);
}