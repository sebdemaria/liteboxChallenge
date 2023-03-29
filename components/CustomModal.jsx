import { useManageMyMovies } from "@/hooks/useManageMyMovies";
import { useState } from "react";
import Image from "next/image";

import * as Yup from "yup";
import { Form, Formik } from "formik";

import { Input, DragDropInput } from "./Form/";
import { Button, ErrorMessage, Loader, ReactModal as Modal } from "./UI/";

import { useAddMovieActions } from "actions/useAddMovieActions";

import {
    FORM_ERROR_MESSAGES,
    IMAGE_SUPPORTED_FORMATS,
    actions,
} from "../consts";

import { MenuBtnClose } from "@/public/assets";

import styles from "@/styles/componentStyles/Modal.module.scss";

export const CustomModal = ({
    isModalOpen = false,
    setIsModalOpen = () => {},
}) => {
    const MAX_FILE_SIZE = 2097152;

    const [addMovie] = useManageMyMovies();
    const [
        state,
        handleSubmitState,
        handleErrorState,
        handleSuccessState,
        handleRestartState,
    ] = useAddMovieActions();

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleRestart = () => {
        handleRestartState();
        setIsLoading(false);
        setErrors("");
    };

    const handleSubmit = async ({ movie_file, movie_name }) => {
        setIsLoading((isLoading) => !isLoading);

        await addMovie(movie_file, movie_name, handleSuccessState);
        handleSubmitState();

        // timeout applied to allow isLoading var to take effect on animations
        // due to localstorage saving being so fast
        setTimeout(() => {
            setIsLoading((isLoading) => !isLoading);
            handleSuccessState();
        }, 2000);
    };

    const onModalClose = () => {
        setIsModalOpen(false);
        setIsLoading(false);
        setErrors("");

        // avoid modal going back to initial state before hiding
        setTimeout(() => {
            handleRestartState();
        }, 1000);
    };

    return (
        <Modal
            bodyOpenClassName={styles.body}
            isOpen={isModalOpen}
            className={styles.modal}
            setIsModalOpen={onModalClose}
            handleRestart={handleRestart}
            overlayClassName={{
                base: styles.overlay,
                afterOpen: styles.overlayAfterOpen,
                beforeClose: styles.overlayBeforeClose,
            }}
        >
            <div className="flex w-full flex-wrap items-center justify-center xs:h-3/4 md:h-full md:py-12 md:px-8">
                <Image
                    alt="menu close button"
                    className={`absolute top-5 right-5 h-[18px] w-[27px] xs:hidden md:block`}
                    onClick={onModalClose}
                    role="button"
                    src={MenuBtnClose}
                />

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
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            await handleSubmit(values);
                        } catch (e) {
                            setErrors([e.message]);
                            handleErrorState();
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ values, setFieldValue }) => (
                        <Form
                            noValidate
                            className="flexJustifyAlignCenterWrap gap-5 xs:h-[80%] md:h-full md:gap-8 md:py-5"
                        >
                            {state.status === actions.SUCCESS ? (
                                <div className="mb-5 flex w-full flex-wrap gap-12 text-center font-oswald uppercase tracking-superWide">
                                    <p className="w-full text-[2em] font-bold text-aqua">
                                        liteflix
                                    </p>
                                    <p className="w-full text-[1.5rem] text-white-normal">
                                        ¡Felicitaciones!
                                        <span className="mt-5 block w-full font-light text-white-normal">
                                            {values.movie_name} fue
                                            correctamente subida.
                                        </span>
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <p className="w-full text-center font-oswald text-[22px] font-bold uppercase tracking-superWide text-aqua">
                                        Agregar película
                                    </p>
                                    {/* drag drop input type file */}
                                    {isLoading &&
                                        state.status === actions.SUBMIT && (
                                            <Loader />
                                        )}

                                    {!isLoading && (
                                        <DragDropInput
                                            setFieldValue={setFieldValue}
                                        />
                                    )}

                                    {state.status === actions.ERROR && (
                                        <ErrorMessage
                                            errorMessage={errors}
                                            handleRestart={handleRestart}
                                        />
                                    )}

                                    <Input
                                        customClass="input-liteflix xs:w-[70%] md:w-full max-w-[350px] my-5"
                                        type="text"
                                        name="movie_name"
                                        placeholder="título"
                                    />

                                    <span className="flex h-min w-full flex-wrap justify-start gap-5 xs:justify-center">
                                        <Button
                                            disabled={isLoading}
                                            className="btn-liteflix-gray md:p-9"
                                            type="submit"
                                        >
                                            subir película
                                        </Button>

                                        <Button
                                            className="btn-liteflix-border mt-5 md:hidden"
                                            onClick={onModalClose}
                                        >
                                            salir
                                        </Button>
                                    </span>
                                </>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    );
};
