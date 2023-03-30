import { addMovieActions } from "@/consts/actions";
import { useReducer } from "react";

export const useMovieReducer = () => {
    const initialState = {
        status: addMovieActions.RESTART,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case addMovieActions.SUBMIT:
                return {
                    status: addMovieActions.SUBMIT,
                };
            case addMovieActions.SUCCESS:
                return {
                    status: addMovieActions.SUCCESS,
                };
            case addMovieActions.ERROR:
                return {
                    status: addMovieActions.ERROR,
                };
            case addMovieActions.RESTART:
                return {
                    status: addMovieActions.RESTART,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, dispatch];
};
