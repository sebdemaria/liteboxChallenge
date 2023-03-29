import { useCallback, useContext, useEffect, useState } from "react";
import { useManageMyMovies } from "@/hooks/useManageMyMovies";

import { AppContext } from "pages";

import { Select, VideoPreviewer } from "@/components/UI";

import { FILTER_VALUES } from "consts/FilterValues";

import styles from "@/styles/componentStyles/Home/MoviesColumn.module.scss";

export const MoviesColumn = () => {
    const [getMovies, removeMovie] = useManageMyMovies();

    const { myMovies: savedMovies } = useContext(AppContext);
    const myMovies = JSON.parse(savedMovies);

    const getMyMovies = useCallback(
        () => {
            getMovies();
        },
        [getMovies],
    );


    const { popularMovies } = useContext(AppContext);

    const [movieFilterSelected, setMovieFilterSelected] = useState(
        FILTER_VALUES.popular.value
    );

    const handleRemoveMovieFromMyMovies = (e) => {
        const title = e.target.getAttribute('data-title');

        removeMovie(title);
    };

    useEffect(() => {
        if (movieFilterSelected === FILTER_VALUES.my_movies.value) {
            getMyMovies();
        }
    }, [movieFilterSelected, getMyMovies]);


    return (
        <aside className="relative grid h-max justify-items-center overflow-hidden xs:top-[25em] xs:col-span-12 xs:gap-5 sm:top-[29rem] md:top-[35em] md:gap-0 lg:top-[6em] lg:col-span-3 lg:left-[20%] xl:left-[25%] 2xl:left-[15em] 3xl:left-[20em] 3xl:self-center">
            <Select
                setOptionSelected={setMovieFilterSelected}
                valueSelected={movieFilterSelected}
                headingText={"Ver:"}
                headingTextBold={FILTER_VALUES[movieFilterSelected].text}
                options={Object.values(FILTER_VALUES)}
            />

            {movieFilterSelected === FILTER_VALUES.popular.value && (
                <div
                    className={`${movieFilterSelected === FILTER_VALUES.popular.value
                        ? styles.fadeIn
                        : styles.fadeOut
                        } mb-10 flex min-h-max flex-wrap justify-center gap-5 xs:mt-3 xs:w-full 2xl:w-min md:mt-6 lg:max-h-[650px] 2xl:max-h-[730px]`}
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
                    className={`${movieFilterSelected === FILTER_VALUES.my_movies.value
                        ? styles.fadeIn
                        : styles.fadeOut
                        } mb-10 flex xs:min-h-[470px] lg:min-h-max flex-wrap justify-center gap-5 xs:mt-3 xs:w-full md:mt-6 lg:max-h-[650px] 3xl:min-h-[640px] 2xl:max-h-[730px]`}
                >
                    {!myMovies?.length ? (
                        <p className="banner-liteflix h-min">
                            No tenés películas guardadas
                        </p>
                    ) : (
                        myMovies?.map(
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
                                    deleteAvailable={true}
                                    key={index}
                                    index={index}
                                    title={title}
                                    imgPath={backdrop_path.original}
                                    score={vote_average}
                                    release_date={release_date}
                                    handleDelete={handleRemoveMovieFromMyMovies}
                                />
                            )
                        )
                    )}
                </div>
            )}
        </aside>
    );
};
