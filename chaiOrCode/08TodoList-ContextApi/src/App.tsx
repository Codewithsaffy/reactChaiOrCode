import { useEffect, useState } from "react";

import { TodoProvider, TodoType } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([] as TodoType[]);
  const addTodo = (todo: TodoType): void => {
    setTodos((prev: TodoType[]) => [
      { id: Date.now(), todo: todo.todo, completed: false },
      ...prev,
    ]);
  };
  const editTodo = (updatedTodo: TodoType, id?: number) => {
    setTodos((prev: TodoType[]) =>
      prev.map((prevTodo: TodoType) =>
        prevTodo.id === id ? { ...prevTodo, todo: updatedTodo.todo } : prevTodo
      )
    );
  };

  const deleteTodo = (id?: number) => {
    setTodos((prev: TodoType[]) =>
      prev.filter((todo: TodoType) =>
        todo.id !== id ? { ...prev, todo } : { ...prev }
      )
    );
  };
  const toggleCompleted = (id?: number) => {
    setTodos((prev: TodoType[]) =>
      prev.map((prevTodo: TodoType) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos: TodoType[] | null = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );

    if (todos && todos.length) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        editTodo,
        deleteTodo,
        toggleCompleted,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {" "}
            <TodoForm />{" "}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todos) => (
              <div key={todos.id}>
                <TodoItem todo={todos} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
