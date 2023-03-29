import { useEffect, useRef, useState } from "react";
import styles from "@/styles/UIStyles/Loader.module.scss";

export const Loader = () => {
    const [percentage, setPercentage] = useState(0);
    const loaderRef = useRef(null);

    useEffect(() => {
        let percentage = 0;

        const interval = setInterval(() => {
            percentage += 10;
            if (loaderRef) loaderRef.current.style.width = `${percentage}%`;

            setPercentage(percentage);

            if (percentage === 100) clearInterval(interval);
        }, 100);
    }, []);

    return (
        <div
            className={`${styles.slideIn} flexAlignCenter h-max w-[80%] flex-wrap gap-3 font-oswald font-light uppercase tracking-superWide text-white-normal transition-all ease-in-out xs:text-[14px] md:h-min md:text-[16px]`}
        >
            <>
                <span className="w-full">Cargando {percentage}%</span>
                <div className="flexAlignCenter relative h-[5px] w-full">
                    <span className="absolute h-[5px] w-full bg-liteflixGray-light"></span>
                    <span
                        ref={loaderRef}
                        name="loader"
                        className={`${styles.loading} absolute h-[8px] bg-aqua`}
                    ></span>
                </div>
            </>
        </div>
    );
};
