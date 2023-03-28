import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import * as Yup from "yup";
import { Form, Formik } from "formik";

import Image from "next/image";

import { Button, Loader, ReactModal as Modal } from "./UI/";

import { FORM_ERROR_MESSAGES, IMAGE_SUPPORTED_FORMATS } from "../consts";
import { MenuBtnClose } from "@/public/assets";

import { Input, DragDropInput } from "./Form/";

import styles from "@/styles/componentStyles/Modal.module.scss";

export const CustomModal = ({
    isModalOpen = false,
    setIsModalOpen = () => { },
}) => {
    const MAX_FILE_SIZE = 2097152;

    const [isLoading, setIsLoading] = useState(false);
    const [percentage, setPercentage] = useState(20);
    const [myMovies, setMyMovies] = useState([]);
    const [errors, setErrors] = useState("");

    const [setStorageItem] = useLocalStorage();

    const handleSubmit = async ({ movie_file, movie_name }) => {
        setIsLoading((isLoading) => !isLoading);
        console.log('movie', myMovies);
        myMovies.push({
            backdrop_path: { original: movie_file.path },
            title: movie_name,
        });
        setTimeout(() => {
            setStorageItem("my_movies", JSON.stringify(myMovies));
            setMyMovies(localStorage.getItem("my_movies"));
        }, 2000);

        setIsLoading((isLoading) => !isLoading);
    };

    useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('my_movies'));
        setMyMovies(movies);
    }, []);

    return (
        <Modal
            bodyOpenClassName={styles.body}
            isOpen={isModalOpen}
            className={styles.modal}
            setIsModalOpen={setIsModalOpen}
            overlayClassName={{
                base: styles.overlay,
                afterOpen: styles.overlayAfterOpen,
                beforeClose: styles.overlayBeforeClose,
            }}
        >
            <div className="flex flex-wrap items-center justify-center xs:h-3/4 md:h-full md:py-12 md:px-8">
                <Image
                    alt="menu close button"
                    className={`absolute top-5 right-5 h-[18px] w-[27px] xs:hidden md:block`}
                    onClick={() => setIsModalOpen(false)}
                    role="button"
                    src={MenuBtnClose}
                />

                <p className="w-full text-center font-oswald text-[22px] font-bold uppercase tracking-superWide text-aqua">
                    Agregar película
                </p>

                <Formik
                    initialValues={{
                        movie_file: "",
                        movie_name: "",
                    }}
                    validationSchema={Yup.object({
                        movie_file: Yup.mixed()
                            .test(
                                "fileSize",
                                FORM_ERROR_MESSAGES.fileSize,
                                (value) => value?.size <= MAX_FILE_SIZE
                            )
                            .test(
                                "fileType",
                                FORM_ERROR_MESSAGES.fileFormat,
                                (value) =>
                                    IMAGE_SUPPORTED_FORMATS.includes(
                                        value?.type
                                    )
                            )
                            .required(FORM_ERROR_MESSAGES.required),
                        movie_name: Yup.string(FORM_ERROR_MESSAGES.text)
                            .required(FORM_ERROR_MESSAGES.required)
                            .max(45, "Máximo 45 caracteres"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        try {
                            handleSubmit(values);
                        } catch (e) {
                            console.error(`Error: ${e}`);
                            setErrors(e);
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ setFieldValue }) => (
                        <Form
                            noValidate
                            className="flexJustifyAlignCenterWrap xs:h-3/4 md:h-full md:gap-8 md:py-8"
                        >
                            {/* drag drop input type file */}
                            {!isLoading ? (
                                <DragDropInput setFieldValue={setFieldValue} />
                            ) : (
                                <Loader
                                    percentage={percentage}
                                    error={errors}
                                    handleSubmit={handleSubmit}
                                />
                            )}

                            <Input
                                customClass="input-liteflix xs:w-[70%] md:w-full max-w-[350px]"
                                type="text"
                                name="movie_name"
                                placeholder="título"
                            />

                            <span className="flex h-min w-full flex-wrap justify-start gap-5 xs:justify-center">
                                <Button
                                    disabled={!isLoading}
                                    className="btn-liteflix-gray md:p-9"
                                    type="submit"
                                >
                                    subir película
                                </Button>

                                <Button
                                    className="btn-liteflix-border md:hidden"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    salir
                                </Button>
                            </span>
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    );
};
