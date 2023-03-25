import { MovieContext } from "pages";
import React, { useContext } from "react";

import styles from "@/styles/screenStyles/MoviesHome.module.scss";
import Image from "next/image";
import { Play, Plus } from "@/public/assets";
import { VideoPreviewer } from "@/components/UI/VideoPreviewer";

export const MoviesHome = () => {
    const { movies, popularMovies } = useContext(MovieContext);

    const { original_title } = movies[0];

    const background = movies[0].poster_path.original;

    const css = `
        #background {
            background-image: url(${background});            
        }
    `;

    return (
        <section className={`transition-700-in-out grid w-full grid-cols-12`}>
            {/* style for dynamic background image url */}
            <style>{css}</style>
            <div
                id="background"
                className={`bg-image-props transition-700-in-out h-min ${styles.background}`}
            ></div>

            {/* main movie title */}
            <div className="absolute grid gap-5 xs:bottom-[calc(20%)] xs:col-span-12 xs:w-[100%] xs:justify-items-center xs:pb-[5em] sm:bottom-[calc(20%)] md:bottom-[calc(15%)] md:pl-[2em] lg:bottom-[calc(5%)] lg:w-[60%] lg:justify-items-start lg:pl-[6em] xl:bottom-[calc(10%)] xl:col-span-6 xl:w-max">
                <p className="font-oswald font-extralight uppercase tracking-superWide text-white-lighter">
                    original de <b className="font-extrabold">liteflix</b>
                </p>
                <h1 className="h1-xxl-aqua font-bebas uppercase xs:w-[90%] xs:text-center sm:w-full md:mb-4 lg:text-start">
                    {original_title}
                </h1>

                <div className="flex w-[90%] flex-wrap gap-5 xs:justify-center lg:justify-start">
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
            <aside className="grid xs:col-span-12 xs:mt-[4em] xs:mb-[6em] xs:justify-items-center xs:gap-5 lg:relative lg:top-[calc(18%)] lg:col-span-11 lg:mt-0 lg:mr-[6rem] lg:h-max lg:justify-items-end xl:mb-0 2xl:lg:top-[calc(24%)]">
                {popularMovies.map(({ title, backdrop_path }, index) => (
                    <VideoPreviewer
                        key={index}
                        index={index}
                        title={title}
                        imgPath={backdrop_path.original}
                    />
                ))}
            </aside>
        </section>
    );
};
