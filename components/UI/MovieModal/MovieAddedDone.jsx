import PropTypes from "prop-types";

import { Button } from "../Button";

import styles from "@/styles/UIStyles/Loader.module.scss";

export const MovieAddedDone = ({ values, onModalClose }) => {
    return (
        <div className={`${styles.slideIn} flexJustifyCenterWrap default-text-style h-full w-full items-center gap-10 text-center xs:pb-0 md:pb-[7em]`}>
            <p className="w-full text-[2em] font-bold text-aqua xs:hidden md:block">
                lite<span className="font-thin">flix</span>
            </p>
            <p className="w-full text-white-normal xs:text-[1.2rem] md:text-[1.5rem]">
                ¡Felicitaciones!
                <span className="m-auto block w-[85%] font-light text-white-normal xs:mt-5">
                    {`'${values.movie_name}' fue correctamente subida.`}
                </span>
            </p>
            <Button
                className="btn-liteflix-gray mt-5 md:hidden"
                onClick={onModalClose}
            >
                ir a home
            </Button>
        </div>
    );
};

MovieAddedDone.propTypes = {
    values: PropTypes.object.isRequired,
    onModalClose: PropTypes.func.isRequired,
};
