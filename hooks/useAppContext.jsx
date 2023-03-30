import { AppContext } from "contexts/AppContext/AppContextProvider";
import { useContext } from "react";

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error(
            "useAppContext must be used within an AppContext.Provider"
        );
    }

    return context;
};