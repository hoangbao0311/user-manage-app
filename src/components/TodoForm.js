import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../actions/todoActions";

const TodoForm = ({ todoToEdit, onClose }) => {
  const initialFormData = {
    name: "",
    age: "",
    salary: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoToEdit) {
      dispatch(editTodo({ ...formData, id: todoToEdit.id }));
      onClose();
    } else {
      dispatch(addTodo({ ...formData, id: Date.now() }));
      setFormData(initialFormData);
    }
  };

  useEffect(() => {
    if (todoToEdit) {
      setFormData({
        name: todoToEdit.name,
        age: todoToEdit.age,
        salary: todoToEdit.salary,
      });
    }
  }, [todoToEdit]);

  return (
    <form
      className="border-solid border-[1px] border-black px-9  shadow-[#5f615f] shadow-lg mb-5 pb-7"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-3 justify-center mt-8 ">
        <div className="flex gap-10 w-full items-center">
          <p className="w-[5%] font-bold">Name:</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
            className="w-1/3 outline-none border-solid border-[1px] border-black py-[9px] px-5"
          />
        </div>
        <div className="flex gap-10 w-full items-center">
          <p className="w-[5%] font-bold">Number</p>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Age"
            required
            className="w-1/3 outline-none border-solid border-[1px] border-black py-[9px] px-5"
          />
        </div>
        <div className="flex gap-10 w-full items-center">
          <p className="w-[5%] font-bold">Salary</p>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            placeholder="Salary"
            required
            className="w-1/3 outline-none border-solid border-[1px] border-black py-[9px] px-5"
          />
        </div>
      </div>
      <div className="flex gap-6 justify-end">
        <button className="py-3 px-6 bg-slate-600 text-white" type="submit">
          {todoToEdit ? "Save" : "Add"}
        </button>
        <button
          className="py-3 px-4 mr-3 bg-gray-500 text-white"
          type="button"
          onClick={() => setFormData(initialFormData)}
        >
          Reset Form
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
