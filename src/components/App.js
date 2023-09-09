import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="mx-7">
        <h1 className="px-4 py-5 font-bold text-[24px] bg-gray-200">User</h1>
        <TodoForm />
        <h1 className="px-4 py-5 font-bold text-[24px] bg-gray-200">
          List of Users
        </h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
