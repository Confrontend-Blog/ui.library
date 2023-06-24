import { render, screen } from "@testing-library/react";
import withLoading from "./with-loading-hoc";
import React from "react";

const TestComponent = ({ text }: { text: string }) => <div>{text}</div>;
const TestComponentWithLoading = withLoading(TestComponent);

describe("withLoading HOC", () => {
  it("renders the loading component when isLoading is true", () => {
    render(<TestComponentWithLoading isLoading={true} text="Hello" />);

    const loadingElement = screen.getByTestId("loading");
    expect(loadingElement).toBeInTheDocument();

    const testElement = screen.queryByText("Hello");
    expect(testElement).not.toBeInTheDocument();
  });

  it("renders the wrapped component when isLoading is false", () => {
    render(<TestComponentWithLoading isLoading={false} text="Hello" />);

    const loadingElement = screen.queryByTestId("loading");
    expect(loadingElement).not.toBeInTheDocument();

    const testElement = screen.getByText("Hello");
    expect(testElement).toBeInTheDocument();
  });
});
