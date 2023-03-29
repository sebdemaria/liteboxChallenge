import { useEffect } from "react";
import Modal from "react-modal";

import PropTypes from "prop-types";

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
            onRequestClose={setIsModalOpen}
            preventScroll
            shouldCloseOnEsc
            shouldCloseOnOverlayClick
            {...props}
        >
            {children}
        </Modal>
    );
};

ReactModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    props: PropTypes.string,
};
