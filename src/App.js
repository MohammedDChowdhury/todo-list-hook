import "./App.css";
import Form from "./Form";
import React, { useState } from "react";
export default () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Form
        onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text }) => (
          <div key={text}>{text}</div>
        ))}
      </div>
    </div>
  );
};
