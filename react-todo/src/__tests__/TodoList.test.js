import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList"; // Ensure the path is correct

test("renders the TodoList with initial items", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
});

test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo", () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
    render(<TodoList />);
    
    const deleteButton = screen.getAllByText("❌")[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
