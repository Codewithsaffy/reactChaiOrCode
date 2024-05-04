import {  useState } from "react";
import { useTodo } from "../context";
import { TodoType } from "../context/TodoContext";


function TodoItem( {todo} : {todo:TodoType}) {
  const [isTodoEditable, setIsTodoEditable] = useState<boolean>(false)
  const [todoMsg, setTodoMsg] = useState(todo as TodoType)
  const { toggleCompleted, deleteTodo, editTodo } = useTodo();
  const updateTodo = () => {
    editTodo( { ...todo, todo: todoMsg.todo }, todo.id);
    setIsTodoEditable(false)
  };
  const toggleComplete = () => {
    toggleCompleted(todo.id);
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todoMsg.completed ? "line-through" : ""}`}
        value={todoMsg.todo}
        onChange={(e) => setTodoMsg({ ...todo, todo: e.target.value })}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            updateTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo?.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
