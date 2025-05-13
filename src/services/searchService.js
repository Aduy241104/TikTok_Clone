import { getAccountAPI } from "../utils/httpRequest";

export const search = async (q, type = "less") => {
    try {
        const respond = await getAccountAPI('users/search', {
            params: {
                q,
                type
            }
        });
        return respond
    } catch (error) {
        console.log("loi roi baby");
    }
}

