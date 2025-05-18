import { getAccountAPI, getSuggestedAccountAPI } from "../utils/httpRequest";

export const getSuggested = async (page, perPage = 5) => {
    try {
        const respond = await getSuggestedAccountAPI("users/suggested", {
            params: {
                page: page,
                per_page: perPage
            }
        })
        return respond;
    } catch (error) {
        console.log("lỗi rồi baby");
        return null;
    }
}

export const getFollowedAccount = async (page) => {
    try {
        const respond = await getAccountAPI('me/followings', {
            params: {
                page
            }
        })
        return respond;
    } catch (error) {
        console.log(error);
    }
}