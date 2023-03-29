import styles from "@/styles/screenStyles/Error.module.scss";

export const Error = ({ children }) => {
    return (
        <section
            className={`${styles.fadeIn} transition-1000-in-out flexJustifyAlignCenterWrap h-screen w-full`}
        >
            <span className="flexJustifyCenterWrap gap-4">
                <h1 className={`w-full text-center text-[5rem] text-aqua`}>
                    liteflix
                </h1>
                <p className="default-text-style-white-light text-center text-3xl text-white-normal">
                    {children}
                </p>
            </span>
        </section>
    );
};
