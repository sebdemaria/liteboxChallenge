import { useContext, useRef, useState } from "react";
import { useScroll } from "@/hooks/useScroll";

import { AppContext } from "pages";

import Image from "next/image";
import Link from "next/link";

import { NavBar, Button } from "@/components/UI/";
import { CSSTransition } from "react-transition-group";

import {
    MenuBtnOpen,
    MenuBtnClose,
    ProfileImg,
    Notification,
    Plus,
} from "@/public/assets";

import { ROUTES } from "../../consts";

import styles from "@/styles/componentStyles/Header.module.scss";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { setIsModalOpen } = useContext(AppContext);

    const [headerBlur] = useScroll();

    const nodeRef = useRef(null);
    const bellRef = useRef(null);

    return (
        <header
            className={`${headerBlur ? styles.bgAnimateIn : styles.bgAnimateOut
                } fixed z-50 w-full grid-cols-12 xxs:hidden xs:grid`}
        >
            <div
                className={`relative z-50 col-span-12 flex h-min items-center pt-4 xs:justify-between xs:px-5 sm:px-10 md:justify-center`}
            >
                {/* open/close menu button */}
                <div
                    className={`${!isMenuOpen
                        ? "md:w-1/12 lg:w-[6%] xl:w-[4%]"
                        : "md:w-7/12 lg:w-[20%] xl:w-[23%] 2xl:w-[25%]"
                        } transition-1000-in-out xs:order-1 md:order-2`}
                >
                    {!isMenuOpen ? (
                        <Image
                            alt="menu open button"
                            className={`transition-700-in-out md:scale-x-[-1]`}
                            onClick={() =>
                                setIsMenuOpen((isMenuOpen) => !isMenuOpen)
                            }
                            role="button"
                            src={MenuBtnOpen}
                        />
                    ) : (
                        <Image
                            alt="menu close button"
                            className={`transition-700-in-out h-[18px] w-[27px]`}
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
                        className={`cursor-pointer text-aqua xs:text-[28px] md:text-[34px] lg:text-[40px]`}
                    >
                        liteflix
                    </p>

                    <Button
                        customClass={`xs:hidden md:flex gap-3 items-center text-white-light default-text-style`}
                        onClick={() => {
                            setIsMenuOpen(false);
                            setIsModalOpen(true);
                        }}
                    >
                        <Image src={Plus} alt="add movie" />
                        <span className="font-normal text-white-light">
                            agregar película
                        </span>
                    </Button>
                </div>

                <div
                    ref={bellRef}
                    className={`cursor-pointer xs:hidden md:order-3 md:block md:w-1/12 lg:w-[6%] xl:w-[4%] ${!isMenuOpen ? "" : "pr-4"
                        }`}
                    onClick={(bellRef) => {
                        bellRef.target.classList.add(styles.ringBell);
                        setTimeout(() => {
                            bellRef.target.classList.remove(styles.ringBell);
                        }, 1000);
                    }}
                >
                    <Image alt="notification" src={Notification} />
                </div>

                <div className="cursor-pointer xs:order-3 md:order-4 md:w-1/12 lg:w-[6%]">
                    <Link
                        href={
                            "https://www.linkedin.com/in/sebastian-demaria1996/"
                        }
                    >
                        <Image
                            alt="profile image"
                            className="w-[40px] rounded-[100%]"
                            src={ProfileImg}
                        />
                    </Link>
                </div>
            </div>

            {/* NavMenu */}
            <CSSTransition
                nodeRef={nodeRef}
                in={isMenuOpen}
                timeout={500}
                unmountOnExit
                classNames={{
                    enter: styles.menuEnter,
                    done: styles.menuEnterDone,
                    exit: styles.menuExit,
                }}
            >
                <div
                    ref={nodeRef}
                    className={`absolute col-span-12 grid h-screen bg-liteflixGray-normal pt-[8em] pb-[5em] font-oswald font-thin text-white-lighter xs:w-full xs:px-5 sm:px-9 md:right-0 md:w-2/4 md:px-12 lg:w-[30%] lg:px-8 xl:px-10`}
                >
                    <NavBar
                        customClass={`h-max tracking-superWide ${styles.slideNavMenuIn} ${styles.animateNavMenu}`}
                        ROUTES={ROUTES}
                    />

                    <Button
                        customClass={`flex gap-3 items-center w-full text-start tracking-superWide my-5 ${styles.slideNavMenuIn} ${styles.animateNavMenu}`}
                        onClick={() => {
                            setIsMenuOpen(false);
                            setIsModalOpen(true);
                        }}
                    >
                        <Image src={Plus} alt="add movie" />
                        <span className="font-normal uppercase text-white-light">
                            agregar película
                        </span>
                    </Button>

                    <Button
                        customClass={`w-full text-start tracking-superWide uppercase ${styles.slideNavMenuIn} ${styles.animateNavMenu}`}
                    >
                        cerrar sesión
                    </Button>
                </div>
            </CSSTransition>
        </header>
    );
};
