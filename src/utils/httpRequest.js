import axios from "axios";
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTc0NzUzODYwNywiZXhwIjoxNzUwMTMwNjA3LCJuYmYiOjE3NDc1Mzg2MDcsImp0aSI6Im1EakhvdGIyakRDWW1TZUUiLCJzdWIiOjczMjgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ZU9YkOVpcGJ44Xl69B3alMUT67OLi8eeWKi66y-1zmw'

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Authorization': `Bearer ${token}`
    }
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