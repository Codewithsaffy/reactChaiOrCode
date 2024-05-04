import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./output.css";

// WE CAN DEFINE FN HERE OR IN APP.JS
// function fn() {
//   return(
//     <h1>Hello World!</h1>
//   )
// }
const anotherElement = (
  <h1 className="text-red-700 text-3xl font-bold">
    Hello World | Another Element
  </h1>
);

// create react element
const reactElement = React.createElement(
  "h1",
  { className: "text-red-700 text-3xl font-bold" },
  "Hello World! | Create React Element"
);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode> // *Optional
  // App() // *we can call App here in js method but good method is :
// reactElement // *we can call reactElement here
  <App />
  // anotherElement // *we can call anotherElement here
  // fn() // *we can define fn here or in App.jsx
  // </React.StrictMode>, // *Optional
);
