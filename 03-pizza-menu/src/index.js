import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function getTodos(num1, num2) {
  num1 + num2;
}

getTodos();
