import { useContext } from "react";

import { MoviesColumn, MainMovieBackGround } from "@/components/Home";
import { ResolutionError } from "./ResolutionError";

import { AppContext } from "pages";

export const MoviesHome = () => {
    const { isModalOpen } = useContext(AppContext);

    return (
        <>
            <section
                className={`${
                    isModalOpen ? "overflow-hidden" : ""
                } transition-700-in-out h-screen grid-cols-12 xxs:hidden xs:grid`}
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
