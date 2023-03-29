export const Button = ({ children, customClass, disabled = false, ...props }) => {
    return (
        <button className={`${customClass}`} {...props} disabled={disabled}>
            {children}
        </button>
    );
};
