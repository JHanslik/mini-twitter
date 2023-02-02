import { API_URL, API_KEY } from "@env";

const logIn = async ({ email, password }) => {
    const request = await fetch(
        `${API_URL}/auth/v1/token?grant_type=password`,
        {
            method: "POST",
            headers: {
                apikey: API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }
    );
    const response = await request.json();
    if (request.status === 401) {
        return request.status;
    } else {
        return response;
    }
};

const signIn = async ({ email, password }) => {
    const request = await fetch(`${API_URL}/auth/v1/signup`, {
        method: "POST",
        headers: {
            apikey: API_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    const response = await request.json();

    return response;
};
export { signIn, logIn };
