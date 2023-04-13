import { render, screen } from "@testing-library/react";
import { MenuList } from "./index";
describe("#MenuList", () => {
  it("menu list has rendered", async () => {
    await render(<MenuList />);
    let menuElem = screen.getByTestId("menu-list");
    console.log(menuElem);
    expect(menuElem).toBeInTheDocument();
  });
});
