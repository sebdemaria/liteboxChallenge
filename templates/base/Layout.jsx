import PropTypes from "prop-types";

import { Header } from "@/components/Header/Header";

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="h-screen">{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
