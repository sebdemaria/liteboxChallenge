import { useRef, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";

import { PlayBtn, Star } from "@/public/assets";

import styles from "@/styles/UIStyles/VideoPreviewer.module.scss";

export const VideoPreviewer = ({
    title,
    imgPath,
    index,
    customClass,
    score,
    release_date,
}) => {
    // required by CSS Transition component to avoid screen reader error
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
                    } bg-video-previewer-props flexFlexWrap relative z-10 h-min overflow-hidden ${
                        isClicked
                            ? "items-center justify-start"
                            : "justify-center"
                    } rounded-md xs:h-[186px] xs:w-[90%] sm:w-[336px] lg:h-[146px] lg:w-[240px] xl:w-[280px]`}
                    onClick={() => setIsClicked((isClicked) => !isClicked)}
                >
                    <style>{css}</style>

                    {!isClicked ? (
                        <div
                            className={`flexJustifyAlignCenterWrap h-full w-full px-3 pt-2 ${
                                isClicked
                                    ? styles.videoPlayerIn
                                    : styles.videoPlayerOut
                            }`}
                        >
                            <Image
                                src={PlayBtn}
                                role="button"
                                alt="remove movie button"
                                className="h-min xs:mb-[-5em] md:mb-[-2em]"
                                width={"auto"}
                                height={"auto"}
                            />
                            <h2
                                className={`${
                                    isClicked ? "w-auto pt-0" : "w-full"
                                } default-text-style-white-extralight text-center text-white-normal xs:text-[0.8rem]`}
                            >
                                {title}
                            </h2>
                        </div>
                    ) : (
                        <div
                            className={`flexAlignCenterWrap default-text-style-white-extralight relative h-full w-full bg-liteflixGray-transparent px-5 py-7 text-center text-white-normal xs:text-[0.8rem] ${
                                isClicked
                                    ? styles.videoPlayerIn
                                    : styles.videoPlayerOut
                            }`}
                        >
                            <div className="flexAlignCenter absolute xs:top-[38%] xs:gap-2 xs:pl-2 lg:top-[30%] lg:pl-5 2xl:top-[35%]">
                                <Image
                                    src={PlayBtn}
                                    alt="play button"
                                    className="w-10"
                                />
                                <h2 className="w-[70%]">{title}</h2>
                            </div>

                            <div className="flexAlignCenter absolute right-0 w-full justify-around xs:bottom-4 xs:gap-[45%] lg:bottom-3 lg:gap-[40%]">
                                <span className="flex gap-2">
                                    <Image src={Star} alt="score" />
                                    <p>{score}</p>
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

VideoPreviewer.propTypes = {
    title: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    customClass: PropTypes.string,
    score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    release_date: PropTypes.string,
};
