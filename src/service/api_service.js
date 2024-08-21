import axios from './axios_customize';//instance of axios

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = '/user'
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data);
}

const updateUserAPI = (_id, fullName, phone) => {
    const URL_BACKEND = "/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_BACKEND, data);
}


const fetchAllUsersAPI = () => {
    const URL_BACKEND = '/user'
    return axios.get(URL_BACKEND);
}


const deleteUserAPI = (id) => {
    const URL_BACKEND = `/user/${id}`;
    return axios.delete(URL_BACKEND);
};

export {
    createUserAPI, updateUserAPI, fetchAllUsersAPI, deleteUserAPI
}
