import { useRef, useState } from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";

import { ArrowDown, Check } from "@/public/assets";

import styles from "@/styles/UIStyles/Select.module.scss";

export const Select = ({
    headingText,
    headingTextBold,
    setOptionSelected,
    options = [],
    valueSelected,
}) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const handleOptionSelected = (value) => {
        setOptionSelected(value);
        setIsSelectOpen(false);
    };

    const nodeRef = useRef(null);

    return (
        <div className="flexJustifyCenter relative h-min w-full">
            {/* select heading */}
            <button
                type="button"
                id="select"
                className="default-text-style customSelect w-full"
                onClick={() => {
                    setIsSelectOpen((isSelectOpen) => !isSelectOpen);
                }}
            >
                <p className="w-max text-center font-extralight text-white-lighter">
                    {headingText}{" "}
                    <b className="font-extrabold">{headingTextBold}</b>
                </p>
                <Image src={ArrowDown} alt="filter movie list" />
            </button>

            {/* select options */}
            <CSSTransition
                nodeRef={nodeRef}
                in={isSelectOpen}
                timeout={500}
                unmountOnExit
                classNames={{ ...styles }}
            >
                <ul
                    ref={nodeRef}
                    className={`${styles.selectOptions} absolute top-[3em] z-30 flex flex-wrap gap-4 bg-liteflixGray-normal py-5 xs:w-screen xs:px-[10%] sm:px-[20%] md:w-[350px] md:px-12 lg:w-[250px] lg:px-5 xl:w-[300px]`}
                >
                    <span
                        className={`${styles.arrow} xs:hidden lg:left-[10em] lg:block 2xl:left-[12em]`}
                    ></span>
                    {options.map(({ value, text }) => (
                        <li
                            key={value}
                            onClick={(e) => handleOptionSelected(value, e)}
                            value={value}
                            className={`default-text-style flex w-full items-center justify-between text-start ${
                                valueSelected === value
                                    ? "font-bold"
                                    : "font-extralight"
                            }`}
                        >
                            {text}
                            {valueSelected === value && (
                                <Image src={Check} alt="selected" />
                            )}
                        </li>
                    ))}
                </ul>
            </CSSTransition>
        </div>
    );
};
