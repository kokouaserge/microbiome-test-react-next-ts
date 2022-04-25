import { render, screen } from "@testing-library/react";
import ListUsers from "../pages/list-users";

it("renders ListUsers unchanged", () => {
  const { container } = render(<ListUsers />);
  expect(container).toMatchSnapshot();
});
