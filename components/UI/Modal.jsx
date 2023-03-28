import { useEffect } from "react";
import Modal from "react-modal";

export const ReactModal = ({
    isModalOpen,
    setIsModalOpen,
    children,
    ...props
}) => {
    useEffect(() => {
        // prevent screen reader warning
        Modal.setAppElement(document.body);
    }, []);

    return (
        <Modal
            closeTimeoutMS={300}
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            preventScroll
            shouldCloseOnEsc
            shouldCloseOnOverlayClick
            {...props}
        >
            {children}
        </Modal>
    );
};
