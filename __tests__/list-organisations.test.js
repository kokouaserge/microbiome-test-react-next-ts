import { render, screen } from "@testing-library/react";
import ListOrganisations from "../pages/list-organisations";

it("renders ListOrganisations unchanged", () => {
  const { container } = render(<ListOrganisations />);
  expect(container).toMatchSnapshot();
});
