import { render, screen, fireEvent } from "@testing-library/react";
import TagInput from "../src/components/TagInput";

describe("TagInput", () => {
  test("renders input field and add button", () => {
    render(<TagInput />);
    expect(screen.getByPlaceholderText("Add a tag")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("adds a tag when clicking the Add button", () => {
    render(<TagInput />);
    const input = screen.getByPlaceholderText("Add a tag");

    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(input).toHaveValue(""); // Input should be cleared
  });

  test("adds a tag when pressing Enter", () => {
    render(<TagInput />);
    const input = screen.getByPlaceholderText("Add a tag");

    fireEvent.change(input, { target: { value: "TypeScript" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("prevents adding empty tags", () => {
    render(<TagInput />);
    const input = screen.getByPlaceholderText("Add a tag");

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(screen.getByText("Add"));

    const tagElements = screen.queryAllByRole("button", { name: "x" });
    expect(tagElements.length).toBe(0);
  });

  test("prevents adding duplicate tags", () => {
    render(<TagInput />);
    const input = screen.getByPlaceholderText("Add a tag");

    // Add first tag
    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.click(screen.getByText("Add"));

    // Try to add the same tag again
    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.click(screen.getByText("Add"));

    // Should only be one "React" tag
    const reactTags = screen.getAllByText("React");
    expect(reactTags.length).toBe(1);
  });

  test("removes a tag when clicking the remove button", () => {
    render(<TagInput />);
    const input = screen.getByPlaceholderText("Add a tag");

    // Add a tag
    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.click(screen.getByText("Add"));

    // Remove the tag
    fireEvent.click(screen.getByRole("button", { name: "x" }));

    // Tag should be removed
    expect(screen.queryByText("React")).not.toBeInTheDocument();
  });
});
