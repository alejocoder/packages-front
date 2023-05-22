import { API } from "./axiosInstance";

const authEndPoint = "/auth";

const loginService = async(loginData) => {
    try {
        const APIresponse = await API.post(`${authEndPoint}/login`, loginData);

    } catch (error) {
        return null;
    }
};

export {loginService}