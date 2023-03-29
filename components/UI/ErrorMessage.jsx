import PropTypes from "prop-types";

import { Button } from "./Button";

import styles from "@/styles/UIStyles/Loader.module.scss";

export const ErrorMessage = ({ errorMessage = "", handleRestart }) => {
    return (
        <div
            className={`${styles.slideIn} flexAlignCenter mb-10 h-max w-[80%] flex-wrap gap-3 font-oswald font-light uppercase tracking-superWide text-white-normal transition-all ease-in-out xs:mt-2 xs:text-[14px] md:mt-0 md:h-min md:text-[16px]`}
        >
            <>
                ¡ERROR! no se pudo cargar la película
                <span className="w-full">- {errorMessage}</span>
                <div className="flexAlignCenter relative h-[5px] w-full">
                    <span className="absolute h-[5px] w-full bg-red-600"></span>
                    <Button
                        onClick={handleRestart}
                        className="absolute right-0 mt-10 font-oswald font-light uppercase tracking-superWide text-white-normal"
                    >
                        Reintentar
                    </Button>
                </div>
            </>
        </div>
    );
};

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    handleRestart: PropTypes.func.isRequired,
};
