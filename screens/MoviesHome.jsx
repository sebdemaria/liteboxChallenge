import { useAppContext } from "@/hooks/useAppContext";

// import { AppContext } from "contexts/AppContext/AppContextProvider";

import { MoviesColumn, MainMovieBackGround } from "@/components/Home";
import { ResolutionError } from "./ResolutionError";

export const MoviesHome = () => {
    const { modalState } = useAppContext();

    return (
        <>
            <section
                className={`${
                    modalState.isOpen ? "overflow-hidden" : ""
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
