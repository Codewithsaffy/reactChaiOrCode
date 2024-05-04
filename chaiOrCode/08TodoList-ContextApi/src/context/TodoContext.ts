import { createContext, useContext } from "react";

export interface TodoType {
  id: number;
  todo: string;
  completed: boolean;
}
export interface TodoContextType {
  todos: TodoType[];
  addTodo: (todo:TodoType) => void;
  editTodo: ( todo: TodoType, id: number) => void;
  deleteTodo: (id?: number) => void;
  toggleCompleted: (id?: number) => void;
}
export const TodoContext = createContext<TodoContextType>({
  todos: [
    {
      id: 1,
      todo: "Learn React",
      completed: false,
    },
  ],
  addTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  toggleCompleted: () => {},
});
export const TodoProvider = TodoContext.Provider;
export const useTodo = () => {
  return useContext(TodoContext);
};
