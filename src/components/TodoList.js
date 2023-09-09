import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../actions/todoActions";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editTodoId, setEditTodoId] = useState(null);

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id) => {
    setEditTodoId(id);
  };

  return (
    <div>
      <ul className="w-full flex flex-col gap-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex w-full justify-between border-solid border-t-[1px] border-black mt-2"
          >
            <span className="flex-1">ID: {todo.id}</span>
            <span className="flex-1">Name: {todo.name}</span>
            <span className="flex-1">Age: {todo.age}</span>
            <span className="flex-1">Salary: {todo.salary}</span>
            <div className="flex ">
              <button
                className="py-3 px-4 mr-3 bg-slate-600 text-white"
                onClick={() => handleEdit(todo.id)}
              >
                Edit
              </button>
              <button
                className="py-3 px-4 mr-3 bg-gray-500 text-white"
                onClick={() => handleRemove(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editTodoId !== null && (
        <div>
          <h2>Chỉnh sửa danh sách</h2>
          <TodoForm
            todoToEdit={todos.find((todo) => todo.id === editTodoId)}
            onClose={() => setEditTodoId(null)}
          />
        </div>
      )}
    </div>
  );
};

export default TodoList;
