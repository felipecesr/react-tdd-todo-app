import { render, screen } from "@testing-library/react";
import Button from './Button'

describe("Button", () => {
  it("renders a text", () => {
    render(<Button>Add</Button>);
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  })
});
