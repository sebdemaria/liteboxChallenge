import { Button } from "./Button";

export const Loader = ({ percentage = 0, error = true, handleSubmit }) => {
    return (
        <div className="flexAlignCenter w-[80%] flex-wrap gap-3 font-oswald font-light uppercase tracking-superWide text-white-normal transition-all ease-in-out xs:text-[14px] md:h-min md:text-[16px]">
            {error ? (
                <>
                    Cargando {percentage}%
                    <div className="flexAlignCenter relative h-[5px] w-full">
                        <span className="absolute h-[5px] w-full bg-liteflixGray-light"></span>
                        <span
                            style={{ width: `${percentage}%` }}
                            className={`absolute h-[8px] bg-aqua transition-all`}
                        ></span>
                    </div>
                </>
            ) : (
                <>
                    ¡ERROR! no se pudo cargar la película
                    <div className="flexAlignCenter relative h-[5px] w-full">
                        <span className="absolute h-[5px] w-full bg-red-600"></span>
                        <Button onClick={handleSubmit} className="absolute font-oswald tracking-superWide text-white-normal right-0 font-light uppercase mt-10">Reintentar</Button>
                    </div>
                </>
            )}
        </div>
    );
};
