export const formatImgPath = (movies = []) => {
    // add prefix to images to enable path for img tags
    for (let movie of movies) {
        if (Object.hasOwn(movie, "backdrop_path")) {
            movie.backdrop_path = {
                original: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
            };
        }

        if (Object.hasOwn(movie, "poster_path")) {
            movie.poster_path = {
                original: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
            };
        }
    }
    return movies;
};
