import axios from "axios";
const token = localStorage.getItem("token")

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

const httpPostReques = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const getAccountAPI = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
}

export const getSuggestedAccountAPI = async (path, option = {}) => {
    const respond = await httpRequest.get(path, option);
    return respond.data;
}

export const getAPI = async (path, option = {}) => {
    const respond = await httpRequest.get(path, option);
    return respond.data;
}

export const getTestAPI = async (path, objectBody) => {
    const response = await httpPostReques.post(path, objectBody)
    return response;

}

export default httpRequest;