import { useCallback, useEffect, useState } from "react";

export const useScroll = () => {
    const [headerBlur, setHeaderBlur] = useState(false);

    const handleScroll = useCallback(() => {
        // calculate scroll percentage
        let scrollTop = window.scrollY;

        if (scrollTop === 0) {
            setHeaderBlur(false);
        } else if (scrollTop > 40) {
            setHeaderBlur(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return [headerBlur];
};
