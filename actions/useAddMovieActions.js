import { useMovieReducer } from "reducers/useMovieReducer";
import { actions } from "@/consts/actions";

export const useAddMovieActions = () => {
    const [state, dispatch] = useMovieReducer();

    function handleSubmitState() {
        dispatch({
            type: actions.SUBMIT,
        });
    }
    function handleSuccessState() {
        dispatch({
            type: actions.SUCCESS,
        });
    }
    function handleErrorState() {
        dispatch({
            type: actions.ERROR,
        });
    }
    function handleRestartState() {
        dispatch({
            type: actions.RESTART,
        });
    }

    return [
        state,
        handleSubmitState,
        handleErrorState,
        handleSuccessState,
        handleRestartState,
    ];
};
