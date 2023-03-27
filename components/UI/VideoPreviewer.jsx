import { PlayBtn, Star } from "@/public/assets";
import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/UIStyles/VideoPreviewer.module.scss";

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
            className={`${customClass} ${
                styles.videoBox
            } bg-video-previewer-props flex flex-wrap content-center overflow-hidden ${
                isClicked ? "items-center justify-start" : "justify-center"
            } rounded-md xs:h-[186px] xs:w-[90%] sm:w-[336px] lg:h-[146px] lg:w-[240px] xl:w-[280px] 2xl:h-[166px] 2xl:w-[336px]`}
            onClick={() => setIsClicked((isClicked) => !isClicked)}
        >
            <style>{css}</style>

            {!isClicked ? (
                <div
                    className={`flexJustifyCenterWrap gap-4 px-3 xs:pt-5 lg:pt-7 ${
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
                    className={`relative flex h-full w-full flex-wrap items-center bg-liteflixGray-transparent px-5 py-7 text-center font-oswald font-extralight uppercase tracking-superWide text-white-normal xs:text-[0.8rem] ${
                        isClicked ? styles.videoPlayerIn : styles.videoPlayerOut
                    }`}
                >
                    <div className="absolute flex items-center xs:top-[38%] xs:gap-2 xs:pl-2 lg:top-[35%] lg:pl-5 2xl:top-[40%]">
                        <Image
                            src={PlayBtn}
                            alt="play button"
                            className="w-10"
                        />
                        <h2 className="w-[70%]">{title}</h2>
                    </div>

                    <div className="absolute right-0 flex w-full items-center justify-around xs:bottom-4 xs:gap-[45%] lg:bottom-3 lg:gap-[40%]">
                        <span className="flex gap-2">
                            <Image src={Star} alt="score" />
                            <p>{score}</p>
                        </span>

                        <p>{release_year}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
