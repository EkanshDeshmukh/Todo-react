import React, { createContext, useState } from 'react'
export const todocontext = createContext(null)

const Context = (props) => {
  const [task, setTask] = useState([{ title: "Task 1", completed: false }])
  return (
    <todocontext.Provider value={[task, setTask]}>
      {props.children}
    </todocontext.Provider>
  )
}


export default Context