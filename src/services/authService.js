import { getTestAPI } from "../utils/httpRequest";


export const loginApi = async (path, option) => {
    try {
        const response = await getTestAPI(path, option);
        return response.data;
    } catch (error) {
        console.log("error in method loginApi", error);

    }

} 