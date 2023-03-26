import { PlayBtn, Star } from "@/public/assets";
import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/componentStyles/VideoPreviewer.module.scss";

export const VideoPreviewer = ({
    title,
    imgPath,
    index,
    customClass,
    score,
    release_date,
}) => {
    const [isClicked, setIsClicked] = useState(false);

    const release_year = release_date.split("-")[0];

    // set dynamic background image path
    const css = `
        #backgroundVideo${index} {
            background-image: url(${String(imgPath)});            
        }
    `;

    return (
        <div
            id={`backgroundVideo${index}`}
            className={`${customClass} bg-video-previewer-props flex flex-wrap content-center overflow-hidden ${
                isClicked ? "items-center justify-start" : "justify-center"
            } rounded-md xs:h-[186px] xs:w-[90%] sm:w-[336px] lg:h-[146px] lg:w-[240px] xl:w-[280px] 2xl:h-[166px] 2xl:w-[336px]`}
            onClick={() => setIsClicked((isClicked) => !isClicked)}
        >
            <style>{css}</style>

            {!isClicked ? (
                <div
                    className={`flex flex-wrap justify-center gap-4 px-3 pt-4 ${
                        isClicked ? styles.videoPlayerIn : styles.videoPlayerOut
                    }`}
                >
                    <Image src={PlayBtn} alt="play button" />
                    <h2
                        className={`${
                            isClicked ? "w-auto pt-0" : "w-full"
                        } text-center font-oswald font-extralight uppercase tracking-superWide text-white-normal xs:text-[0.8rem]`}
                    >
                        {title}
                    </h2>
                </div>
            ) : (
                <div
                    className={`flex h-full w-full flex-wrap items-baseline bg-liteflixGray-transparent px-5 py-7 text-center font-oswald font-extralight uppercase tracking-superWide text-white-normal xs:text-[0.8rem] ${
                        isClicked ? styles.videoPlayerIn : styles.videoPlayerOut
                    }`}
                >
                    <div className="flex w-full items-center gap-4 xs:mt-12 lg:mt-6 2xl:mt-9">
                        <Image src={PlayBtn} alt="play button" />
                        <h2 className="w-auto">{title}</h2>
                    </div>

                    <div className="flex w-full items-center justify-between pt-5">
                        <span className="flex gap-2">
                            <Image src={Star} alt="score" />
                            <p> {score}</p>
                        </span>

                        <p>{release_year}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
