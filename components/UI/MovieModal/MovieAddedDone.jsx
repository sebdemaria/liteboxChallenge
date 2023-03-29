import { Button } from "../Button";

export const MovieAddedDone = ({ values, onModalClose }) => {
    return (
        <div className="flexJustifyCenterWrap default-text-style mb-5 w-full gap-12 text-center">
            <p className="w-full text-[2em] font-bold text-aqua">liteflix</p>
            <p className="w-full text-[1.5rem] text-white-normal">
                ¡Felicitaciones!
                <span className="mt-5 block w-full font-light text-white-normal">
                    {values.movie_name} fue correctamente subida.
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
