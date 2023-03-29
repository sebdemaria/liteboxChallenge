import { useState } from "react";
import { useManageMyMovies } from "@/hooks/useManageMyMovies";
import PropTypes from "prop-types";
import Image from "next/image";

import { Form, Formik } from "formik";
import { ValidationSchema } from "./CustomModalValidationSchema";

import { Input, DragDropInput } from "../Form";
import {
    Button,
    ErrorMessage,
    Loader,
    MovieAddedDone,
    ReactModal as Modal,
} from "../UI";

import { useAddMovieActions } from "actions/useAddMovieActions";

import { actions } from "../../consts";

import { MenuBtnClose } from "@/public/assets";

import styles from "@/styles/componentStyles/Modal.module.scss";

export const CustomModal = ({ isModalOpen, setIsModalOpen = () => {} }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const [addMovie] = useManageMyMovies();

    const [
        state,
        handleSubmitState,
        handleErrorState,
        handleSuccessState,
        handleRestartState,
    ] = useAddMovieActions();

    const handleRestart = () => {
        setErrors("");
        handleRestartState();
        setIsLoading(false);
    };

    const handleSubmit = async ({ movie_file, movie_name }, setSubmitting) => {
        try {
            setIsLoading((isLoading) => !isLoading);
            setErrors("");

            await addMovie(movie_file, movie_name, handleSuccessState);
            handleSubmitState();

            // timeout applied to show loader for 2 seconds
            // due to localstorage saving being so fast
            setTimeout(() => {
                setIsLoading((isLoading) => !isLoading);
                handleSuccessState();
            }, 2000);
        } catch (e) {
            setIsLoading((isLoading) => !isLoading);
            setErrors(e.message);
            handleErrorState();
        } finally {
            setSubmitting(false);
        }
    };

    const onModalClose = () => {
        setIsModalOpen(false);
        setIsLoading(false);

        // avoid modal going back to initial state before hiding
        setTimeout(() => {
            setErrors("");
            handleRestartState();
        }, 1000);
    };

    return (
        <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={onModalClose}
            bodyOpenClassName={styles.body}
            className={styles.modal}
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
                    validationSchema={ValidationSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        handleSubmit(values, setSubmitting);
                    }}
                >
                    {({ values, setFieldValue }) => (
                        <Form
                            noValidate
                            className="flexJustifyAlignCenterWrap gap-5 xs:h-[80%] md:h-full md:gap-9 md:py-5"
                        >
                            {/* successfully added movie modal */}
                            {state.status === actions.SUCCESS ? (
                                <MovieAddedDone
                                    values={values}
                                    onModalClose={onModalClose}
                                />
                            ) : (
                                <>
                                    <p className="default-text-style-white-bold w-full text-center text-[22px] text-aqua">
                                        Agregar película
                                    </p>

                                    {/* loader */}
                                    {isLoading &&
                                        state.status === actions.SUBMIT && (
                                            <Loader />
                                        )}

                                    {/* drag drop input type file */}
                                    {state.status === actions.RESTART && (
                                        <DragDropInput
                                            setFieldValue={setFieldValue}
                                            fieldName={"movie_file"}
                                        />
                                    )}

                                    {/* error message */}
                                    {state.status === actions.ERROR && (
                                        <ErrorMessage
                                            errorMessage={errors}
                                            handleRestart={handleRestart}
                                        />
                                    )}

                                    <Input
                                        customClass="input-liteflix xs:w-[70%] h-min md:w-full max-w-[350px]"
                                        type="text"
                                        name="movie_name"
                                        placeholder="título"
                                    />

                                    <span className="mt-5 flex h-min w-full flex-wrap justify-start gap-5 xs:justify-center">
                                        <Button
                                            disabled={isLoading}
                                            className="btn-liteflix-gray md:p-9"
                                            type="submit"
                                        >
                                            subir película
                                        </Button>

                                        <Button
                                            className="btn-liteflix-border md:hidden"
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

CustomModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
};
