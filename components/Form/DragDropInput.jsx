import { forwardRef, useCallback, useEffect, useState } from "react";
import { base64Convert } from "utils/base64Convert";
import PropTypes from "prop-types";

import Image from "next/image";

import { ErrorMessage } from "formik";

import { Input } from "./Input";

import { useDropzone } from "react-dropzone";

import { Clip } from "@/public/assets";

export const DragDropInput = forwardRef(({ setFieldValue, fieldName }, ref) => {
    const [imagePath, setImagePath] = useState("");

    const onDrop = useCallback((acceptedFiles) => {
        const ImgUrl = acceptedFiles.map((file) => URL.createObjectURL(file));

        base64Convert(ImgUrl, setImagePath);
    }, []);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/png": [".png"],
            "image/jpg": [".jpg"],
            "image/jpeg": [".jpeg"],
            "image/webp": [".webp"],
        },
        onDrop,
        maxFiles: 1,
    });

    useEffect(() => {
        // create file object again if any of the dependecies asigned change
        const fileObject = {
            type: acceptedFiles[0]?.type,
            size: acceptedFiles[0]?.size,
            path: imagePath,
        };
        setFieldValue(fieldName, fileObject);
    }, [setFieldValue, acceptedFiles, imagePath, fieldName]);

    return (
        <div>
            <span
                {...getRootProps({
                    className: "dropzone flexJustifyCenterWrap",
                })}
            >
                <label
                    className="flexJustifyCenter btn-liteflix-border-dashed mb-1 cursor-pointer p-12 xs:w-[90%] xs:max-w-[320px] xs:text-[16px] sm:max-w-[500px] md:w-[650px] md:max-w-[650px] md:text-[16px]"
                    htmlFor={fieldName}
                >
                    <Image alt="attach file" src={Clip} />
                    {acceptedFiles[0] ? (
                        <div className="flexJustifyCenter min-w-[220px]">
                            {acceptedFiles[0].name}
                        </div>
                    ) : (
                        <p className="flexJustifyCenter w-max min-w-[220px] gap-2 sm:px-1 lg:px-3">
                            Agregar un archivo
                            <span className="w-max xs:hidden md:block">
                                o arrastralo y soltalo aquí
                            </span>
                        </p>
                    )}
                </label>
                <ErrorMessage
                    name={fieldName}
                    component={"p"}
                    className="errorMessage-liteflix"
                />

                {/* hidden input type file asigned to formik validations and submit */}
                <Input
                    {...getInputProps()}
                    ref={ref}
                    accept="image/jpg, image/png, image/jpeg, image/webp, image/avif"
                    customClass="hidden"
                    id={fieldName}
                    type="file"
                />
            </span>
        </div>
    );
});

DragDropInput.displayName = "DragDropInput";

DragDropInput.propTypes = {
    setFieldValue: PropTypes.func.isRequired,
    fieldName: PropTypes.string.isRequired,
};
