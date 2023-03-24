import { useState } from "react";
import Image from "next/image";
import { NavBar } from "./NavBar";

import {
    MenuBtnOpen,
    MenuBtnClose,
    ProfileImg,
    Notification,
} from "@/public/assets";
import { ROUTES } from "consts/Routes";
import { Button } from "./UI/Button";

import styles from "@/styles/componentStyles/NavBar.module.scss";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleAddMovie = () => {
        alert("agregue una peli");
    };

    return (
        <div className={`fixed z-50 grid w-full grid-cols-12`}>
            <div
                className={`relative z-50 col-span-12 flex h-min items-center px-10 pt-4 xs:justify-between md:justify-center`}
            >
                <div
                    className={`${
                        !isMenuOpen
                            ? "md:w-1/12 lg:w-[6%]"
                            : "md:w-7/12 lg:w-[20%] 2xl:w-[22%]"
                    } transition-700-in-out xs:order-1 md:order-2`}
                >
                    {!isMenuOpen ? (
                        <Image
                            alt="menu open button"
                            onClick={() =>
                                setIsMenuOpen((isMenuOpen) => !isMenuOpen)
                            }
                            role="button"
                            src={MenuBtnOpen}
                        />
                    ) : (
                        <Image
                            alt="menu close button"
                            className={`h-[18px] w-[27px]`}
                            onClick={() =>
                                setIsMenuOpen((isMenuOpen) => !isMenuOpen)
                            }
                            role="button"
                            src={MenuBtnClose}
                        />
                    )}
                </div>

                <div className="flex items-center justify-start xs:order-2 md:order-1 md:ml-5 md:w-[95%] md:gap-7 lg:w-11/12 lg:gap-[6em]">
                    <p
                        className={`text-aqua xs:text-[28px] md:text-[34px] lg:text-[40px]`}
                    >
                        liteflix
                    </p>

                    <Button
                        customClass={`xs:hidden md:block font-oswald text-white-light tracking-superWide`}
                        onClick={handleAddMovie}
                    >
                        <span className="text-xl">+</span>{" "}
                        <span className="font-normal text-white-light">
                            AGREGAR PELÍCULA
                        </span>
                    </Button>
                </div>

                <div
                    className={`xs:hidden md:order-3 md:block md:w-1/12 lg:w-[6%] ${
                        !isMenuOpen ? "" : "pr-4"
                    }`}
                >
                    <Image alt="notification" src={Notification} />
                </div>

                <div className="xs:order-3 md:order-4 md:w-1/12 lg:w-[6%]">
                    <Image alt="profile image" src={ProfileImg} />
                </div>
            </div>

            {/* NavMenu */}
            <div
                className={`absolute col-span-12 px-12 pt-[8em] pb-[5em] font-oswald font-thin text-white-lighter xs:w-full md:right-0 md:w-2/4 lg:w-[30%] ${
                    !isMenuOpen ? "hidden" : "grid bg-liteflixGray"
                } transition-1000-in-out ${styles.slideMenuOpen} ${
                    styles.animateMenu
                }`}
            >
                <NavBar
                    customClass={`h-max tracking-superWide ${styles.slideNavMenuIn} ${styles.animateNavMenu}`}
                    ROUTES={ROUTES}
                />

                <Button
                    customClass={`w-full text-start tracking-superWide my-5 ${styles.slideNavMenuIn} ${styles.animateNavMenu}`}
                    onClick={handleAddMovie}
                >
                    <span className="text-xl">+</span>{" "}
                    <span className="font-normal text-white-light">
                        AGREGAR PELÍCULA
                    </span>
                </Button>

                <Button
                    customClass={`w-full text-start tracking-superWide ${styles.slideNavMenuIn} ${styles.animateNavMenu}`}
                >
                    CERRAR SESIÓN
                </Button>
            </div>
        </div>
    );
};
