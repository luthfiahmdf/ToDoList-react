import {
  FaSistrix,
  FaRegTrashAlt,
  FaEdit,
  FaCheckSquare,
} from "react-icons/fa";
import { BiCheckboxChecked, BiSquare } from "react-icons/bi";
import "./App.css";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "./data.json";

function App() {
  const [todo, SetTodo] = useState(data);

  const [newTask, setNewTask] = useState("");
  const [update, setUpdate] = useState("");
  const navigate = useNavigate();

  const addTask = () => {
    if (newTask) {
      let num = todo.length + 1;
      let newEntry = { id: num, task: newTask, complete: false };
      SetTodo([...todo, newEntry]);
      setNewTask("");
    }
  };

  const delTask = (id) => {
    let newTasks = todo.filter((task) => task.id !== id);
    SetTodo(newTasks);
  };

  const doneTask = () => {};

  const cancelUpdate = () => {};

  const changeTask = (e) => {
    let newEntry = {
      id: update.id,
      title: e.target.value,
      complete: update.complete ? true : false,
    };
    setUpdate(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...todo].filter((task) => task.id !== update.id);
    let updatedObject = [...filterRecords, update];
    SetTodo(updatedObject);
    setUpdate("");
  };

  return (
    <div className="Container h-screen border-2  grid place-content-center bg-slate-200 ">
      <div className="container-lg w-42 h-42 bg-slate-100 m-20 drop-shadow-xl">
        <div className="header text-center font-bold text-2xl mt-2">
          {" "}
          ToDoSearch
        </div>
        <div className="seacrh m-3 p-2 border border-slate-400">
          <div className="p-2 flex flex-wrap">
            <p className="bg-sky-500 w-8 p-2 text-white rounded-l-md">
              <FaSistrix />
            </p>
            <input
              className="w-80 border border-slate-400 font-light pl-2"
              placeholder="Search ToDo"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </div>
          <div className=" flex flex-wrap m-2 space-x-12 h-8  text-white font-light">
            <button className=" bg-sky-500 w-3/5  rounded ">Search</button>
            <button className=" bg-sky-500 w-44 rounded " onClick={addTask}>
              Add New Task
            </button>
          </div>
        </div>
        <div className=" m-2 p-2">
          <h1 className="text-2xl font-semibold text-center">TodoList</h1>
          <div className="grid grid-cols-3 content-center gap-x-52  w-80 m-2   text-white  font-light ">
            <div>
              <button className="bg-sky-500 w-44  h-8 rounded">All</button>
            </div>
            <div>
              <button className="bg-sky-500 w-44  h-8 rounded">Done</button>
            </div>
            <div>
              <button className="bg-sky-500 w-44  h-8 rounded">Todo</button>
            </div>
          </div>
        </div>

        {todo &&
          todo.map((task) => (
            <div className="Content pr-2 pl-2 pb-1 m-1 ">
              <div className="items-center">
                <div className="border-2 border-slate-400 p-1 hover:border-slate-600 grid grid-cols-2 ">
                  <h1
                    key={task.id}
                    className={`${
                      task.complete
                        ? "text-red-600 line-through "
                        : "text-black"
                    }`}
                  >
                    {task.task}
                  </h1>
                  <div className="flex flex-wrap justify-end pr-2 space-x-2">
                    <div className="taskBg">
                      <input
                        type="checkbox"
                        className={`${data.complete ? "checked" : ""}`}
                      ></input>
                    </div>

                    <button
                      className="text-yellow-400 "
                      value={update && update.title}
                      onChange={(e) => changeTask(e)}
                      onClick={updateTask}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-rose-900"
                      onClick={() => delTask(task.id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className="footer grid place-content-center mb-2 ">
          <div className="grid grid-cols-2 text-center m-2 font-light text-white gap-x-9 ">
            <div className="_colleft ">
              <button className="rounded bg-rose-700 w-72 h-8 ">
                Delete Done Task
              </button>
            </div>
            <div className="_colright">
              <button className="rounded bg-rose-700 w-72 h-8">
                Delete All Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
