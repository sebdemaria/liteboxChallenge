import { useRef, useState } from "react";
import Image from "next/image";

import { CSSTransition } from "react-transition-group";

import { PlayBtn, Star, MenuBtnClose } from "@/public/assets";

import styles from "@/styles/UIStyles/VideoPreviewer.module.scss";

export const VideoPreviewer = ({
    title,
    imgPath,
    index,
    customClass,
    score,
    release_date,
    handleDelete,
    deleteAvailable,
}) => {
    const nodeRef = useRef(null);

    const [isClicked, setIsClicked] = useState(false);

    const release_year = release_date?.split("-")[0];

    // set dynamic background image path
    const css = `
        #backgroundVideo${index} {
            background-image: url(${String(imgPath)});            
        }
    `;

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={true}
            timeout={500}
            unmountOnExit
            classNames={{ ...styles }}
        >
            <>
                <div
                    id={`backgroundVideo${index}`}
                    className={`${customClass} ${
                        styles.videoBox
                    } bg-video-previewer-props relative z-10 flex flex-wrap content-center overflow-hidden ${
                        isClicked
                            ? "items-center justify-start"
                            : "justify-center"
                    } rounded-md xs:h-[186px] xs:w-[90%] sm:w-[336px] lg:h-[146px] lg:w-[240px] xl:w-[280px]`}
                    onClick={() => setIsClicked((isClicked) => !isClicked)}
                >
                    <style>{css}</style>

                    {deleteAvailable && (
                        <button
                            className="absolute top-3 left-3 z-30 w-3 cursor-pointer"
                            onClick={handleDelete}
                        >
                            <Image
                                src={MenuBtnClose}
                                data-title={title}
                                alt="play button"
                            />
                        </button>
                    )}

                    {!isClicked ? (
                        <div
                            className={`flexJustifyCenterWrap h-full w-full  gap-1 px-3 xs:pt-7 ${
                                isClicked
                                    ? styles.videoPlayerIn
                                    : styles.videoPlayerOut
                            }`}
                        >
                            <Image
                                src={PlayBtn}
                                role="button"
                                alt="remove movie button"
                                width={"auto"}
                                height={"auto"}
                            />
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
                                isClicked
                                    ? styles.videoPlayerIn
                                    : styles.videoPlayerOut
                            }`}
                        >
                            <div className="absolute flex items-center xs:top-[38%] xs:gap-2 xs:pl-2 lg:top-[30%] lg:pl-5 2xl:top-[35%]">
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
                                    <p>{score ? score : "N/A"}</p>
                                </span>

                                <p>{release_year}</p>
                            </div>
                        </div>
                    )}
                </div>
            </>
        </CSSTransition>
    );
};
