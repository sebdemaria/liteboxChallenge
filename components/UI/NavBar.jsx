import Link from "next/link";
import PropTypes from "prop-types";

export const NavBar = ({
    customClass = "",
    ROUTES = [{ wordKey: "Send me a routes array", route: "/" }],
}) => {
    return (
        <nav className={`${customClass}`} role="navigation">
            <ul className="flexFlexWrap gap-9 hXs:gap-7">
                {ROUTES.map(({ wordKey, route }) => (
                    <li
                        key={wordKey}
                        className="transition-500-in-out w-full hover:font-light hover:text-white-normal"
                    >
                        <Link role="link" href={`${route}`}>
                            {wordKey}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

NavBar.propTypes = {
    customClass: PropTypes.string,
    ROUTES: PropTypes.array.isRequired,
};
