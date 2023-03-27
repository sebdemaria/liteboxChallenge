import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import Modal from "react-modal";
import Image from "next/image";

import { MenuBtnClose } from "@/public/assets";

import styles from "@/styles/componentStyles/Modal.module.scss";

export const CustomModal = ({
    isModalOpen = false,
    setIsModalOpen = () => {},
}) => {
    const nodeRef = useRef(null);

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={isModalOpen}
            timeout={500}
            unmountOnExit
            classNames={{ enter: styles.modalEnter, exit: styles.modalExit }}
        >
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className={styles.modal}
                bodyOpenClassName={styles.body}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                overlayClassName={styles.overlay}
            >
                <span className="flex flex-wrap justify-center gap-4">
                    <p className="text-center font-oswald text-3xl font-light uppercase tracking-superWide text-white-light">
                        Hola
                    </p>

                    <Image
                        alt="menu close button"
                        className={`absolute top-5 right-5 h-[18px] w-[27px] xs:hidden md:block`}
                        onClick={() => setIsModalOpen(false)}
                        role="button"
                        src={MenuBtnClose}
                    />

                    <div className="flex h-min w-full flex-wrap justify-start gap-5 xs:justify-center">
                        <button className="btn-liteflix-gray">
                            subir película
                        </button>

                        <button
                            className="btn-liteflix-border md:hidden"
                            onClick={() => setIsModalOpen(false)}
                        >
                            salir
                        </button>
                    </div>
                </span>
            </Modal>
        </CSSTransition>
    );
};
