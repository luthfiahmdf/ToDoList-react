import { FaSistrix } from "react-icons/fa";

function App() {
  return (
    <div className="Container h-screen border-2 border-amber-500 grid place-content-center bg-slate-300 ">
      <div className="container-lg w-42 h-42 bg-slate-100 m-20 drop-shadow-xl">
        <div className="header text-center font-bold text-2xl mt-4">
          {" "}
          ToDoSearch
        </div>
        <div className="seacrh m-4 p-2 border border-slate-400">
          <div className="p-2 flex flex-wrap">
            <p className="bg-sky-500 w-8 p-2 text-white rounded-l-md">
              <FaSistrix />
            </p>
            <input
              className="w-80 border border-slate-400 font-light"
              placeholder=" Search ToDo"
            ></input>
          </div>
          <div className=" flex flex-wrap m-2 space-x-12 h-8  text-white font-light">
            <button className=" bg-sky-500 w-3/5  rounded ">Search</button>
            <button className=" bg-sky-500 w-44 rounded">Add New Task</button>
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
        <div className="Content p-3 m-2">
          <div className="border-2 border-slate-400 p-1 hover:border-slate-600">
            Todo Test
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
