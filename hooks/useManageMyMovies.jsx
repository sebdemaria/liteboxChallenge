import { AppContext } from "pages";
import { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useManageMyMovies = () => {
    const { myMovies: savedMovies, setMyMovies } = useContext(AppContext);
    const myMovies = JSON.parse(savedMovies);

    const [setStorageItem, getStorageItem] = useLocalStorage();

    const addMovie = (movie_file, movie_name) => {
        if (!movie_file) return;

        if (myMovies.length === 4)
            throw Error("Llegaste a tu máximo de películas guardadas.");

        myMovies?.push({
            backdrop_path: { original: movie_file?.path },
            title: movie_name,
        });

        setTimeout(() => {
            setStorageItem("my_movies", JSON.stringify(myMovies));
            setMyMovies(getStorageItem("my_movies"));
        }, 2000);
    };

    const getMovies = () => {
        const movies = localStorage.getItem("my_movies");
        if (movies?.length) setMyMovies(movies);
    };

    const removeMovie = (title) => {
        const updatedMovies = myMovies.filter((movie) => movie.title !== title);

        return setStorageItem("my_movies", JSON.stringify(updatedMovies));
    };

    return [addMovie, getMovies, removeMovie];
};
