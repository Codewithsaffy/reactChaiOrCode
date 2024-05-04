// import React from 'react'

import AddTodo from "./Component/Addtodo";
import Todo from "./Component/Todo";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold mt-8 text-center">React Redux Toolkit Todo List</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
