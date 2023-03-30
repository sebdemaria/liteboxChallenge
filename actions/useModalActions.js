import { useModalReducer } from "reducers/useModalReducer";
import { modalActions } from "@/consts/actions";

export const useModalActions = () => {
    const [state, dispatch] = useModalReducer();

    function handleOpenModal() {
        dispatch({
            type: modalActions.OPEN,
        });
    }

    function handleCloseModal() {
        dispatch({
            type: modalActions.CLOSE,
        });
    }

    return [state, handleOpenModal, handleCloseModal];
};
