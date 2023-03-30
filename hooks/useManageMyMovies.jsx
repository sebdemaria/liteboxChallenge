import { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppContext } from "contexts/AppContext/AppContext";

export const useManageMyMovies = () => {
    const { myMovies, setMyMovies } = useContext(AppContext);

    const [setStorageItem, getStorageItem] = useLocalStorage();

    const getMovies = () => {
        const movies = getStorageItem("my_movies");
        if (movies) setMyMovies(movies);
    };

    const addMovie = (movie_file, movie_name) => {
        // error check
        if (!movie_file || !movie_name) return;
        if (myMovies.length === 4) throw Error("Llegaste a tu máximo de películas guardadas.");

        myMovies?.push({
            backdrop_path: { original: movie_file?.path },
            title: movie_name,
        });

        setTimeout(() => {
            setStorageItem("my_movies", myMovies);
            setMyMovies(getStorageItem("my_movies"));
        }, 2000);
    };

    const removeMovie = (title) => {
        const updatedMovies = myMovies.filter((movie) => movie.title !== title);

        return setStorageItem("my_movies", updatedMovies);
    };

    return [addMovie, getMovies, removeMovie];
};
