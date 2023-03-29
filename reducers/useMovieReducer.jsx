import { actions } from "@/consts/actions";
import { useReducer } from "react";

export const useMovieReducer = () => {
    const initialState = {
        status: actions.RESTART,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case actions.SUBMIT:
                return {
                    status: actions.SUBMIT,
                };
            case actions.SUCCESS:
                return {
                    status: actions.SUCCESS,
                };
            case actions.ERROR:
                return {
                    status: actions.ERROR,
                };
            case actions.RESTART:
                return {
                    status: actions.RESTART,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, dispatch];
};
