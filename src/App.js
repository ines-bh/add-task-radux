import React from "react";
import "./App.css";
import AddTask from "./components/Add-Task";
import displayTodo from "./components/displayTodo";

function App() {
  return (
    <div className="App">
      <AddTask />
      <displayTodo/>
    </div>
  );
}

export default App;
