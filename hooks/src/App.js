import React, { useState, useEffect, useContext } from "react";

import "./App.css";
import ToDoList from "./ToDoList";

const ThemeContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeContext.Provider value={darkMode}>
      <div className="App">
        <header className="App-header">
          <ToDoList toggleTheme={toggleTheme} darkMode={darkMode} />
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
