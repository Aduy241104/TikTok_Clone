import axios from "axios";

const httpRequest = axios.create({
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

export default httpRequest;