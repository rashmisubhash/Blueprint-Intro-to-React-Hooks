import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = ({ toggleTheme, darkMode }) => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([
        ...todos,
        // Can be anything else (Can make it more efficient )
        { id: todos.length + 1, text: inputText, completed: false },
      ]);
      setInputText("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={darkMode ? "todo-app dark-theme" : "todo-app"}>
      <div className="dark-mode-button-handler-container">
        <button
          className="dark-mode-button"
          style={{
            backgroundColor: !darkMode ? "#333" : "#000",
            border: darkMode ? "1px solid #333" : "1px solid #000",
          }}
          onClick={() => toggleTheme(!darkMode)}
        >
          {!darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <h1>Todo List</h1>
      <div className="header"></div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
        placeholder="Enter a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-container">
            <input
              type="checkbox"
              class="largerCheckbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
