export const formatImgPath = (movies = []) => {
    // add prefix to images to enable path for img tags
    for (let movie of movies) {
        if (Object.hasOwn(movie, "backdrop_path")) {
            movie.backdrop_path = {
                w300: `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`,
                w780: `https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`,
                w1280: `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`,
                original: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
            };
        }

        if (Object.hasOwn(movie, "poster_path")) {
            movie.poster_path = {
                w92: `https://image.tmdb.org/t/p/w92/${movie.poster_path}`,
                w154: `https://image.tmdb.org/t/p/w154/${movie.poster_path}`,
                w185: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
                w342: `https://image.tmdb.org/t/p/w342/${movie.poster_path}`,
                w500: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                w780: `https://image.tmdb.org/t/p/w780/${movie.poster_path}`,
                original: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
            };
        }
    }
    return movies;
};
