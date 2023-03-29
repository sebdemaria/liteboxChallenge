import PropTypes from "prop-types";

export const Button = ({
    children,
    customClass = "btn-liteflix",
    disabled = false,
    type = "button",
    ...props
}) => {
    return (
        <button
            className={`${customClass}`}
            type={type}
            {...props}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    customClass: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    props: PropTypes.string,
};
