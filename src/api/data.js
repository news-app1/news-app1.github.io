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
    return await api.get(host + '/classes/News');
}
/*
export async function getRecordsById(recordId) {
    const query = JSON.stringify({quiz: createPointer('Quiz', quizId)});
    const response = await api.get(host + '/classes/{Class}?where=' + encodeURIComponent(query));
    return response.results
}
// export async function getAllRecentRecords() {
//     return await api.get(host + '/classes/News?sortBy=_createdOn%20desc&distinct=category');
// }


// export async function searchRecords(query) {
    //     return await api.get(host + `/classes/News?where=title%20LIKE%20%22${query}%22`);
    // }
    
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