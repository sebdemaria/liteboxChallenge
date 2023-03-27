import { MoviesColumn } from "@/components/Home/MoviesColumn";

import { ResolutionError } from "./ResolutionError";

import { MainMovieBackGround } from "@/components/Home/MainMovieBackGround";

export const MoviesHome = () => {
    return (
        <>
            <section
                className={`transition-700-in-out h-screen grid-cols-12 xxs:hidden xs:grid`}
            >
                {/* style for dynamic background image url */}
                <MainMovieBackGround />

                {/* popular movies column */}
                <MoviesColumn />
            </section>

            {/* screen for less than 320px */}
            <ResolutionError />
        </>
    );
};
