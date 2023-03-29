import styles from "../styles/screenStyles/Error.module.scss";

export const ResolutionError = () => {
    return (
        <section
            className={`${styles.fadeIn} transition-1000-in-out h-full w-full items-center justify-center xxs:flex xs:hidden`}
        >
            <span className="flexJustifyCenterWrap gap-7">
                <h1 className={`text-[40px] text-aqua`}>liteflix</h1>
                <p className="text-center font-oswald text-3xl font-light uppercase tracking-superWide text-white-light">
                    Lo sentimos, nuestra UI no soporta resoluciones menores a
                    320px
                </p>
            </span>
        </section>
    );
};
