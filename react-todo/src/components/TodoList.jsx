import { useState } from "react";

function TodoList() {
    // Initial todos
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a project", completed: false },
    ]);

    // Add a new todo
    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    // Toggle completion
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodoForm addTodo={addTodo} />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text}
                        <button onClick={(e) => {
                            e.stopPropagation(); // Prevent toggling when clicking delete
                            deleteTodo(todo.id);
                        }}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function AddTodoForm({ addTodo }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        addTodo(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoList;
