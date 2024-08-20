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

const updateUserAPI = () => {

}

const fetchAllUsersAPI = () => {
    const URL_BACKEND = '/user'
    return axios.get(URL_BACKEND);
}


export {
    createUserAPI, updateUserAPI, fetchAllUsersAPI
}
