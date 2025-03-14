import { useContext, useState } from "react";
import { DispatchContext, TodosContext } from "../reducers/TodoReducers";
import { Task } from "./Task";

export const TaskList = () => {

  const dispatch = useContext(DispatchContext);
  const todos = useContext(TodosContext);



  return (
    <>
    <ol>
      {todos.map((todo) => 
        <Task todo={todo}/>
      )}
    </ol>
    </>
  )
}

