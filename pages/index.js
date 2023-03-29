import { createContext, useEffect, useState } from "react";
import Head from "next/head";

import { Layout } from "@/templates/base/Layout";

import { getMovies } from "httpServices/movies/getMovies";

import { formatImgPath } from "utils/formatImgPath";

import { MoviesHome } from "@/screens/MoviesHome";

import { CustomModal } from "@/components/CustomModal/CustomModal";

import { ENDPOINTS } from "@/consts/Endpoints";

export const getServerSideProps = async () => {
    // server side call for movies
    const BASE_URL = process.env.BASE_API_URL;
    const API_KEY = process.env.TMD_API_KEY;

    const movies = await getMovies({
        BASE_URL,
        API_KEY,
        ENDPOINT: ENDPOINTS.NOW_PLAYING,
    });

    const popularMovies = await getMovies({
        BASE_URL,
        API_KEY,
        ENDPOINT: ENDPOINTS.POPULAR,
    });

    // format image paths and limit results amount
    const moviesFormatted = formatImgPath(movies.movies);
    const popularMoviesFormatted = formatImgPath(popularMovies.movies).slice(
        0,
        4
    );

    return {
        props: {
            movies: JSON.parse(JSON.stringify(moviesFormatted)),
            popularMovies: JSON.parse(JSON.stringify(popularMoviesFormatted)),
        },
    };
};

export const AppContext = createContext();

export default function Home({ movies, popularMovies }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [myMovies, setMyMovies] = useState(JSON.stringify([]));

    const contextValue = {
        movies,
        popularMovies,
        setMyMovies,
        myMovies,
        setIsModalOpen,
        isModalOpen,
    };

    useEffect(() => {
        // set app context value
        const movies = localStorage.getItem("my_movies");
        if (movies?.length) setMyMovies(movies);
    }, []);

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

            <AppContext.Provider value={contextValue}>
                <Layout>
                    <MoviesHome />
                    <CustomModal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                </Layout>
            </AppContext.Provider>
        </>
    );
}
