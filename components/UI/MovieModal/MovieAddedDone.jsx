import PropTypes from "prop-types";

import { Button } from "../Button";

export const MovieAddedDone = ({ values, onModalClose }) => {
    return (
        <div className="flexJustifyCenterWrap default-text-style mb-5 w-full gap-[10em] text-center">
            <p className="xs:hidden md:block w-full text-[2em] font-bold text-aqua">liteflix</p>
            <p className="w-full xs:text-[1.2rem] md:text-[1.5rem] text-white-normal">
                ¡Felicitaciones!
                <span className="mt-5 block w-[85%] m-auto font-light text-white-normal">
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
