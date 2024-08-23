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


const fetchAllUsersAPI = (current, pageSize) => {
    const URL_BACKEND = `/user?current=${current}&pageSize=${pageSize}`;
    // const URL_BACKEND = "/user"
    return axios.get(URL_BACKEND);
}


const deleteUserAPI = (id) => {
    const URL_BACKEND = `/user/${id}`;
    return axios.delete(URL_BACKEND);
};

const updateUserAPIVer02 = (_id, fullName, phone, avatar) => {
    const URL_BACKEND = "/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone,
        avatar: avatar
    }
    return axios.put(URL_BACKEND, data);
}


const uploadImageAPI = (file, folder) => {
    const URL_BACKEND = '/file/upload'
    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    }

    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);
    return axios.post(URL_BACKEND, bodyFormData, config);
}

const registerUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = '/user/register'
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data);
}

const loginAPI = (email, password) => {
    const URL_BACKEND = '/auth/login'
    const data = {
        username: email,
        password: password,
    }
    return axios.post(URL_BACKEND, data);
}

export {
    createUserAPI, updateUserAPI, fetchAllUsersAPI, deleteUserAPI, updateUserAPIVer02, uploadImageAPI,
    registerUserAPI, loginAPI
}
