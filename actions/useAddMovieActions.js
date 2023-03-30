import { useMovieReducer } from "reducers/useMovieReducer";
import { addMovieActions } from "@/consts/actions";

export const useAddMovieActions = () => {
    const [state, dispatch] = useMovieReducer();

    function handleSubmitState() {
        dispatch({
            type: addMovieActions.SUBMIT,
        });
    }
    function handleSuccessState() {
        dispatch({
            type: addMovieActions.SUCCESS,
        });
    }
    function handleErrorState() {
        dispatch({
            type: addMovieActions.ERROR,
        });
    }
    function handleRestartState() {
        dispatch({
            type: addMovieActions.RESTART,
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
