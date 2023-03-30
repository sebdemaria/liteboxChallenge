import { useContext } from "react";

import { AppContext } from "contexts/AppContext/AppContext";

import { MoviesColumn, MainMovieBackGround } from "@/components/Home";
import { ResolutionError } from "./ResolutionError";

export const MoviesHome = () => {
    const { modalState } = useContext(AppContext);

    return (
        <>
            <section
                className={`${modalState.isOpen ? "overflow-hidden" : ""
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
