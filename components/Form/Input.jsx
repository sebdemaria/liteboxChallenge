import { useField, ErrorMessage } from "formik";
import PropTypes from "prop-types";

import styles from "@/styles/componentStyles/Form/Input.module.scss";

export const Input = ({
    type = "text",
    name = "default",
    customClass = "",
    ...props
}) => {
    const [field] = useField(name);

    return (
        <span
            className={`${
                customClass === "hidden"
                    ? "hidden"
                    : "flexJustifyCenterWrap h-[40px] w-full gap-1"
            }`}
        >
            <input
                className={`${customClass} h-min`}
                type={type}
                name={name}
                {...field}
                {...props}
            />
            <ErrorMessage
                name={name}
                component={"p"}
                className={`${styles.slideIn} errorMessage-liteflix`}
            />
        </span>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    customClass: PropTypes.string,
    props: PropTypes.string,
};
