import "@testing-library/jest-dom";
import { NavBar } from "@/components/UI";
import { render, screen } from "@testing-library/react";

const ROUTES = [{ wordKey: "test", route: "/test" }];

describe("Input", () => {
    it("should be rendered", () => {
        render(
            <NavBar
                disabled
                ROUTES={[{ wordKey: "Send me a routes array", route: "/" }]}
            />
        );

        //select the elements you want to interact with
        expect(screen.getByRole("navigation")).toBeDefined();
    });

    it("should have route sent through props set", () => {
        render(<NavBar ROUTES={ROUTES} />);

        const anchor = screen.getByRole("link");

        //select the elements you want to interact with
        expect(anchor).toHaveAttribute("href", ROUTES[0].route);
        expect(anchor).toBeInTheDocument();
    });

    it("should match route with one in routes array", () => {
        const ROUTES = [{ wordKey: "test", route: "/test" }];

        render(<NavBar ROUTES={ROUTES} />);

        const anchor = screen.getByRole("link");

        //select the elements you want to interact with
        expect(anchor).toHaveTextContent(ROUTES[0].wordKey);
    });
});
