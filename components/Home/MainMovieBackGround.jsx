import { useContext } from "react";
import { AppContext } from "pages";

import Image from "next/image";

import { Play, Plus } from "@/public/assets";

import styles from "@/styles/screenStyles/MoviesHome.module.scss";

export const MainMovieBackGround = () => {
    const { movies } = useContext(AppContext);

    // movie background
    const { original_title } = movies[0];
    const background = movies[0].poster_path.original;

    const css = `
        #background {
            background-image: url(${background});            
        }
    `;

    return (
        <>
            <style>{css}</style>
            <div
                id="background"
                className={`bg-image-props transition-700-in-out absolute z-0 h-min ${styles.background}`}
            ></div>

            {/* main movie title */}
            <div
                className={`relative grid h-min gap-5 xs:top-[20em] xs:col-span-12 xs:justify-items-center sm:top-[25em] md:top-[30em] lg:top-[-8em] lg:col-span-8 lg:justify-items-start lg:self-end lg:pl-[6em] 2xl:top-[-10em] 2xl:col-span-6`}
            >
                <p
                    className={`${styles.slideLeftIn} default-text-style h-min font-extralight text-white-lighter`}
                >
                    original de <b className="font-extrabold">liteflix</b>
                </p>
                <h1
                    className={`${styles.slideLeftIn} h1-xxl-aqua font-bebas uppercase xs:w-[95%] xs:text-center md:mb-4 lg:w-[80%] lg:text-start xl:w-full`}
                >
                    {original_title}
                </h1>

                <div
                    className={`flex h-min flex-wrap xs:w-[90%] xs:justify-center xs:gap-5 md:w-full md:gap-3 lg:justify-start`}
                >
                    <button className={`${styles.widthIn} btn-liteflix`}>
                        <Image
                            src={Play}
                            alt="add movie"
                            className={`${styles.widthInDelayed}`}
                        />
                        reproducir
                    </button>

                    <button className={`${styles.fadeIn} btn-liteflix-border`}>
                        <Image src={Plus} alt="show my list" />
                        mi lista
                    </button>
                </div>
            </div>
        </>
    );
};
