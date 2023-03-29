import Link from "next/link";

export const NavBar = ({
    customClass,
    ROUTES = [{ wordKey: "Send me a routes array", route: "/" }],
}) => {
    return (
        <nav className={`${customClass}`}>
            <ul className="flexFlexWrap gap-9">
                {ROUTES.map(({ wordKey, route }) => (
                    <li
                        key={wordKey}
                        className="transition-500-in-out w-full hover:font-light hover:text-white-normal"
                    >
                        <Link href={`${route}`}>{wordKey}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
