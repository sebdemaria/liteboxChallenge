import { useContext } from "react";

import Image from "next/image";
import { VideoPreviewer } from "@/components/UI/VideoPreviewer";

import { MovieContext } from "pages";

import { ArrowDown, Play, Plus } from "@/public/assets";

import styles from "@/styles/screenStyles/MoviesHome.module.scss";

export const MoviesHome = () => {
    const { movies, popularMovies } = useContext(MovieContext);

    // background movie
    const { original_title } = movies[0];
    const background = movies[0].poster_path.original;

    const css = `
        #background {
            background-image: url(${background});            
        }
    `;

    return (
        <section className={`transition-700-in-out grid h-screen grid-cols-12`}>
            {/* style for dynamic background image url */}
            <style>{css}</style>
            <div
                id="background"
                className={`bg-image-props transition-700-in-out absolute z-0 h-min ${styles.background}`}
            ></div>

            {/* main movie title */}
            <div className="relative grid h-min gap-5 xs:top-[20em] xs:col-span-12 xs:justify-items-center sm:top-[25em] md:top-[30em] lg:top-[-8em] lg:col-span-8 lg:justify-items-start lg:self-end lg:pl-[6em] 2xl:top-[-10em]">
                <p className="h-min font-oswald font-extralight uppercase tracking-superWide text-white-lighter">
                    original de <b className="font-extrabold">liteflix</b>
                </p>
                <h1 className="h1-xxl-aqua font-bebas uppercase xs:w-[95%] xs:text-center md:mb-4 lg:w-[90%] lg:text-start xl:w-full">
                    {original_title}
                </h1>

                <div className="flex h-min flex-wrap xs:w-[90%] xs:justify-center xs:gap-5 md:w-full md:gap-3 lg:justify-start">
                    <button className="btn-liteflix">
                        <Image src={Play} alt="add movie" />
                        reproducir
                    </button>
                    <button className="btn-liteflix-border">
                        <Image src={Plus} alt="show my list" />
                        mi lista
                    </button>
                </div>
            </div>

            {/* popular movies column */}
            <aside className="relative grid xs:top-[27em] xs:col-span-12 xs:justify-items-center xs:gap-5 sm:top-[33em] md:top-[38em] lg:top-[-5em] lg:col-span-4 lg:mt-0 lg:h-max lg:justify-items-end lg:self-end lg:pr-[3rem] xl:mb-0 2xl:pr-[8rem] 3xl:self-center">
                <button className="w-full flex items-center justify-center gap-2 mb-7">
                    <p className="w-max text-center font-oswald font-extralight uppercase tracking-superWide text-white-lighter">
                        Ver: <b className="font-extrabold">populares</b>
                    </p>
                    <Image src={ArrowDown} alt='filter movies' />
                </button>

                {popularMovies.map(
                    (
                        { title, backdrop_path, vote_average, release_date },
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
            </aside>
        </section>
    );
};
