import { getSuggestedAccountAPI } from "../utils/httpRequest";

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