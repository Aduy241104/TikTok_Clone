import { getAccountAPI } from "../utils/httpRequest";

export const search = async (q, type = "less") => {
    try {
        const respond = await getAccountAPI('users/search', {
            params: {
                q,
                type
            }
        });
        return respond;
    } catch (error) {
        console.log("loi roi baby");
    }
}

export const getCurrentAccount = async () => {
    try {
        const respond = await getAccountAPI('auth/me');
        return respond;

    } catch (error) {
        console.log(error);

    }
}
