import axios from "axios";

export const HttpClient = (BASE_URL, timeout) =>
    axios.create({
        baseURL: BASE_URL,
        timeout: timeout,
    });
