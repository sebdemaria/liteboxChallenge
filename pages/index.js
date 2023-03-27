import Head from "next/head";
import { Layout } from "@/templates/base/Layout";

import { getMovies } from "httpServices/movies/getMovies";

import { formatImgPath } from "utils/formatImgPath";
import { createContext, useState } from "react";
import { MoviesHome } from "@/screens/MoviesHome";
import { CustomModal } from "@/components/CustomModal";

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

    const mymovies = await getMovies({
        BASE_URL,
        API_KEY,
        ENDPOINT: "popular",
    });

    // format image paths and limit results amount
    const moviesFormatted = formatImgPath(movies.movies);
    const popularMoviesFormatted = formatImgPath(popularMovies.movies).slice(
        0,
        4
    );

    const myMovies = formatImgPath(mymovies.movies).slice(4, 8);

    return {
        props: {
            movies: JSON.parse(JSON.stringify(moviesFormatted)),
            popularMovies: JSON.parse(JSON.stringify(popularMoviesFormatted)),
            myMovies: JSON.parse(JSON.stringify(myMovies)),
        },
    };
};

export const AppContext = createContext();

export default function Home({ movies, popularMovies, myMovies }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const contextValue = {
        movies,
        popularMovies,
        myMovies,
        setIsModalOpen,
        isModalOpen,
    };

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
