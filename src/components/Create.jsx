import { useContext, useState } from 'react'
import { IoSendSharp } from "react-icons/io5";
import { todocontext } from '../Contexts/Context';


const Create = () => {
     const [task,setTask] = useContext(todocontext)
     const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        setTask([...task, { title, completed: false }]);
        setTitle("");
    };
    return (
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
    )
}

export default Create