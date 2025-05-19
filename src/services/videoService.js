import { getAPI } from "../utils/httpRequest";

export const getVideoListWithType = async (type, page) => {
    try {
        const response = await getAPI("videos", {
            params: {
                type,
                page
            }
        });
        return response;
    } catch (error) {
        console.log("Error in getVideoListWithType method", error);
        throw error;
    }
};
