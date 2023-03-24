export const Button = ({ children, customClass, ...props }) => {
    return (
        <button className={`${customClass}`} {...props}>
            {children}
        </button>
    );
};
