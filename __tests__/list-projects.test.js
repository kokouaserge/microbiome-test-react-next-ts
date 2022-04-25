import { render, screen } from "@testing-library/react";
import ListProjects from "../pages/list-projects";

it("renders ListProjects unchanged", () => {
  const { container } = render(<ListProjects />);
  expect(container).toMatchSnapshot();
});
