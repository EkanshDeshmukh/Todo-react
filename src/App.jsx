import { useState } from "react";
import Header from "./components/Header";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
 
  const [task, setTask] = useState([]);

  
  return (
    <div className=" border-t-2 w-screen h-screen bg-zinc-800 flex  items-center flex-col">
      <Header task={task} />
      <Create task={task} setTask={setTask} />
      <Show tasks={task} settasks={setTask}/>
    </div>
  );
};

export default App;
