import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";

const App = () => {

  const [title, setTitle] = useState("")
  const [task, setTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = { title, completed: false };
    setTask([...task, newTask]);
    setTitle('');
  };

  const deleteHandler = (index) => {
    const newTask = [...task]
    newTask.splice(index, 1)
    setTask(newTask)

  }

  return (
    <div className=" border-t-2 w-screen h-screen bg-zinc-800 flex  items-center flex-col">
      <div className="mt-[7%] w-[25%] h-[20%] border rounded-3xl flex justify-around items-center">
        <div className="text-yellow-100">
          <h1 className="text-3xl font-bold">LETS TODO</h1>
          <p>Keeps doing things</p>
        </div>
        <div className="text-4xl font-extrabold flex justify-center items-center w-[120px] h-[120px] rounded-full bg-orange-600">
          1/3
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-[25%] flex justify-between px-5 my-[2%]">
        <input onChange={(e) => setTitle(e.target.value)}
          placeholder="write your next task..."
          className="px-5 py-3 text-yellow-100 outline-none w-[85%] rounded-xl bg-zinc-700 "
          type="text"
        />
        <button className="outline-none text-4xl font-extrabold ml-5 flex justify-center p-3 items-center w-[50px] h-[50px] rounded-full bg-orange-600">
          <IoSendSharp />
        </button>
      </form>

      <ul className="list-none w-[25%]">
        {task.map((elem, index) => (
          <li key={index} className="mb-5 flex justify-between items-center border rounded-xl p-5">
            <div className="flex items-center">
              <div className="mr-4 rounded-full w-[30px] h-[30px] border border-orange-600"></div>
              <h1 className="text-2xl font-extrabold text-yellow-100">{elem.title}</h1>
            </div>
            <div className="flex gap-3 text-2xl text-yellow-100">
              <i className="ri-file-edit-line"></i>
              <button onClick={() => { deleteHandler() }} > <i className="ri-delete-bin-3-line"></i></button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;