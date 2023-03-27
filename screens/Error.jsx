import styles from "@/styles/screenStyles/Error.module.scss";

export const Error = ({ children }) => {
    return (
        <section
            className={`${styles.fadeIn} transition-1000-in-out flexJustifyAlignCenterWrap h-screen w-full`}
        >
            <span className="flex flex-wrap justify-center gap-4">
                <h1 className={`w-full text-center text-[5rem] text-aqua`}>
                    liteflix
                </h1>
                <p className="text-center font-oswald text-3xl font-light uppercase tracking-superWide text-white-light">
                    {children}
                </p>
            </span>
        </section>
    );
};
