import { useContext, useEffect, useState } from "react";

import { AppContext } from "pages";

import { Select, VideoPreviewer } from "@/components/UI";

import { FILTER_VALUES } from "consts/FilterValues";

import styles from "@/styles/componentStyles/Home/MoviesColumn.module.scss";

export const MoviesColumn = () => {
    const [myMovies, setMyMovies] = useState([]);

    const { popularMovies } = useContext(AppContext);

    const [movieFilterSelected, setMovieFilterSelected] = useState(
        FILTER_VALUES.popular.value
    );

    useEffect(() => {
        const movies = localStorage.getItem("my_movies");
        console.log(movies);
        // setMyMovies(JSON.parse(movies));
    }, []);

    return (
        <aside className="relative grid h-max xs:top-[25em] xs:col-span-12 xs:gap-5 sm:top-[29rem] md:top-[80%] md:gap-0 lg:top-[8em] lg:col-span-4 lg:pr-[3rem] xl:mb-0 2xl:left-[30em] 2xl:col-span-3 2xl:pr-[8rem] 3xl:self-center">
            <Select
                setOptionSelected={setMovieFilterSelected}
                valueSelected={movieFilterSelected}
                headingText={"Ver:"}
                headingTextBold={FILTER_VALUES[movieFilterSelected].text}
                options={Object.values(FILTER_VALUES)}
            />

            {movieFilterSelected === FILTER_VALUES.popular.value && (
                <div
                    className={`${
                        movieFilterSelected === FILTER_VALUES.popular.value
                            ? styles.fadeIn
                            : styles.fadeOut
                    } mb-10 flex min-h-[470px] flex-wrap justify-center gap-5 overflow-y-scroll xs:mt-3 xs:w-full md:mt-6 lg:max-h-[650px] 2xl:max-h-[730px]`}
                >
                    {popularMovies.map(
                        (
                            {
                                title,
                                backdrop_path,
                                vote_average,
                                release_date,
                            },
                            index
                        ) => (
                            <VideoPreviewer
                                key={index}
                                index={index}
                                title={title}
                                imgPath={backdrop_path.original}
                                score={vote_average}
                                release_date={release_date}
                            />
                        )
                    )}
                </div>
            )}
            {movieFilterSelected === FILTER_VALUES.my_movies.value && (
                <div
                    className={`${
                        movieFilterSelected === FILTER_VALUES.my_movies.value
                            ? styles.fadeIn
                            : styles.fadeOut
                    } mb-10 flex min-h-[470px] flex-wrap justify-center gap-5 overflow-y-scroll xs:mt-3 xs:w-full md:mt-6 lg:max-h-[650px] 2xl:max-h-[730px]`}
                >
                    {!myMovies?.length ? (
                        <p className="banner-liteflix">
                            No tenés películas guardadas
                        </p>
                    ) : (
                        myMovies.map(
                            (
                                {
                                    title,
                                    backdrop_path,
                                    vote_average,
                                    release_date,
                                },
                                index
                            ) => (
                                <VideoPreviewer
                                    key={index}
                                    index={index}
                                    title={title}
                                    imgPath={backdrop_path.original}
                                    score={vote_average}
                                    release_date={release_date}
                                />
                            )
                        )
                    )}
                </div>
            )}
        </aside>
    );
};
