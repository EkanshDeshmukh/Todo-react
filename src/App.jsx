import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";

const App = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setTask([...task, { title, completed: false }]);
    setTitle("");
  };

  const deleteHandler = (index) => {
    const newTask = [...task];
    const isvalid = confirm('Are you sure you want to delete?');
    if (isvalid || newTask[index].completed) {
      newTask.splice(index, 1);
      setTask(newTask);
    }
  };

  let taskrender = null;

  if (task.length > 0) {
    taskrender = task.map((elem, index) => (
      <ul key={index} className="list-none w-[25%]">
        <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
          <div className="flex items-center">
            <div onClick={() => completeTaskToggle(index)} className={`${elem.completed ? "bg-green-500" : "border"} mr-4 rounded-full w-[30px] h-[30px] border-orange-500 `}></div>
            <h1 className="text-2xl font-extrabold text-yellow-100">{elem.title}</h1>
          </div>
          <div className="flex gap-3 text-2xl text-yellow-100">
            <i className="ri-file-edit-line"></i>
            <button onClick={() => deleteHandler(index)}><i className="ri-delete-bin-3-line"></i></button>
          </div>
        </li>
      </ul>
    ));
  } else {
    taskrender = <h1 className="text-orange-500 font-bold text-2xl">No Pending Task...</h1>;
  }

 

  return (
    <div className=" border-t-2 w-screen h-screen bg-zinc-800 flex  items-center flex-col">
      <div className="mt-[7%] w-[25%] h-[20%] border rounded-3xl flex justify-around items-center">
        <div className="text-yellow-100">
          <h1 className="text-3xl font-bold">LETS TODO</h1>
          <p>Keeps doing things</p>
        </div>
        <div className="text-4xl font-extrabold flex justify-center items-center w-[120px] h-[120px] rounded-full bg-orange-600">
          {task.filter(t => t.completed === true).length}/
          {task.length}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-[25%] flex justify-between px-5 my-[2%]">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="write your next task..."
          className="px-5 py-3 text-yellow-100 outline-none w-[85%] rounded-xl bg-zinc-700 "
          type="text"
        />
        <button type="submit" className="outline-none text-4xl font-extrabold ml-5 flex justify-center p-3 items-center w-[50px] h-[50px] rounded-full bg-orange-600">
          <IoSendSharp />
        </button>
      </form>

      {taskrender}
    </div>
  );
};

export default App;
