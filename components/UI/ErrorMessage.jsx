import PropTypes from "prop-types";

import { Button } from "./Button";

import styles from "@/styles/UIStyles/Loader.module.scss";

export const ErrorMessage = ({ errorMessage = "", handleRestart }) => {
    return (
        <div
            className={`${styles.slideIn} flexAlignCenter h-max w-[80%] flex-wrap gap-3 font-oswald font-light uppercase tracking-superWide text-white-normal transition-all ease-in-out xs:text-[14px] md:h-min md:text-[16px]`}
        >
            <>
                ¡ERROR! no se pudo cargar la película
                <span className="w-full">- {errorMessage[0]}</span>
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
    errorMessage: PropTypes.func.string,
    handleRestart: PropTypes.func.isRequired,
};