import { HttpClient } from "httpServices/base/httpClient";

export const getMovies = async ({ BASE_URL, API_KEY, ENDPOINT }) => {
    try {
        const { data } = await HttpClient(BASE_URL, 2000).get(
            `${ENDPOINT}?api_key=${API_KEY}`
        );

        return { movies: data.results };
    } catch (err) {
        return err;
    }
};
