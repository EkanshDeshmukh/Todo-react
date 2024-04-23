import React, { useContext } from 'react'
import { todocontext } from '../Contexts/Context'

const Header = () => {
 const [task] = useContext(todocontext)
    //const {task} = props
    return (
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
    )
}

export default Header