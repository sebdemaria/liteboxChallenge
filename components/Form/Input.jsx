import { useField, ErrorMessage } from "formik";

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
                    : "flexJustifyCenterWrap h-[40px] w-full gap-2"
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
