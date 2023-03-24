import Head from "next/head";
import { Layout } from "@/templates/base/Layout";

import { getMovies } from "httpServices/movies/getMovies";

import { formatImgPath } from "utils/formatImgPath";
import { createContext } from "react";
import { MoviesHome } from "@/screens/MoviesHome";

export const getServerSideProps = async () => {
    // server side call for movies
    const BASE_URL = process.env.BASE_API_URL;
    const API_KEY = process.env.TMD_API_KEY;

    const movies = await getMovies({
        BASE_URL,
        API_KEY,
        ENDPOINT: "now_playing",
    });

    const popularMovies = await getMovies({
        BASE_URL,
        API_KEY,
        ENDPOINT: "popular",
    });

    const moviesFormatted = formatImgPath(movies.movies);
    const popularMoviesFormatted = formatImgPath(popularMovies.movies);

    return {
        props: {
            movies: JSON.parse(JSON.stringify(moviesFormatted)),
            popularMovies: JSON.parse(JSON.stringify(popularMoviesFormatted)),
        },
    };
};

export const MovieContext = createContext();

export default function Home({ movies, popularMovies }) {
    return (
        <>
            <Head>
                <title>LiteFlix - Challenge</title>
                <meta
                    name="description"
                    content="LiteFlix Challenge for LiteBox"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="shortcut icon" href="/images/favicon.ico" />
            </Head>
            <MovieContext.Provider value={{ movies, popularMovies }}>
                <Layout>
                    <MoviesHome />
                </Layout>
            </MovieContext.Provider>
        </>
    );
}
