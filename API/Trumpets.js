import { API_URL, API_KEY } from "@env";

const getAllTrumpets = async (token) => {
    const request = await fetch(`${API_URL}/rest/v1/Tweets?select=*`, {
        headers: {
            apikey: API_KEY,
            Authorization: `Bearer ${token}`,
        },
    });
    const response = await request.json();
    return response;
};

export { getAllTrumpets };
