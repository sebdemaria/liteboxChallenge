import { useEffect, useMemo, useState } from "react";
import Head from "next/head";

import { Layout } from "@/templates/base/Layout";

import { getMovies } from "httpServices/movies/getMovies";

import { formatImgPath } from "utils/formatImgPath";

import { MoviesHome } from "@/screens/MoviesHome";

import { CustomModal } from "@/components/CustomModal/CustomModal";

import { ENDPOINTS } from "@/consts/Endpoints";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AppContext } from "contexts/AppContext/AppContext";
import { useModalActions } from "actions";

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
            movies: moviesFormatted,
            popularMovies: popularMoviesFormatted,
        },
    };
};

export default function Home({ movies, popularMovies }) {
    const [myMovies, setMyMovies] = useState([]);

    const [modalState, handleOpenModal, handleCloseModal] = useModalActions();

    const [, getStorageItem] = useLocalStorage();

    const contextDefaultValue = useMemo(
        () => ({
            movies,
            popularMovies,
            setMyMovies,
            myMovies,
            modalState,
            handleOpenModal,
            handleCloseModal,
        }),
        [
            handleCloseModal,
            handleOpenModal,
            modalState,
            myMovies,
            setMyMovies,
            popularMovies,
            movies,
        ]
    );

    useEffect(() => {
        // set app context value
        const movies = getStorageItem("my_movies");
        if (movies) {
            setMyMovies(movies);
        } else {
            setMyMovies([]);
        }
    }, [getStorageItem]);

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

            <AppContext.Provider value={contextDefaultValue}>
                <Layout>
                    <MoviesHome />
                    <CustomModal />
                </Layout>
            </AppContext.Provider>
        </>
    );
}
