import { useCallback, useEffect, useState } from "react";
import { base64Convert } from "utils/base64Convert";

import Image from "next/image";

import { ErrorMessage } from 'formik';

import { Input } from "./Input";

import { useDropzone } from "react-dropzone";

import { Clip } from "@/public/assets";

export const DragDropInput = ({ setFieldValue }) => {
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
        maxFiles: 1
    });

    useEffect(() => {
        const fileObject = {
            type: acceptedFiles[0]?.type,
            size: acceptedFiles[0]?.size,
            path: imagePath,
        };
        setFieldValue("movie_file", fileObject);
    }, [setFieldValue, acceptedFiles, imagePath]);

    return (
        <div>
            <span
                {...getRootProps({
                    className: "dropzone flexJustifyCenterWrap",
                })}
            >
                <label
                    className="flexJustifyCenter cursor-pointer btn-liteflix-border-dashed mb-1 p-12 xs:w-[90%] xs:max-w-[320px] xs:text-[16px] sm:max-w-[500px] md:w-[650px] md:max-w-[650px] md:text-[16px]"
                    htmlFor="movieAdd"
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
                <ErrorMessage name='movie_file' component={'p'} className="errorMessage-liteflix" />

                <Input
                    {...getInputProps(

                    )}
                    accept="image/jpg, image/png, image/jpeg, image/webp, image/avif"
                    customClass="hidden"
                    id="movieAdd"
                    type="file"
                />
            </span>
        </div>
    );
};
