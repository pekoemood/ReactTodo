import { useContext, useState } from "react";
import { DispatchContext } from "../reducers/TodoReducers";

export const Task = ({todo}) => {
    const dispatch = useContext(DispatchContext);
    const [isActive, setIsActive] = useState(false)
    const editTask = (todoId, e) => {
      dispatch({ type: 'editTask', id: todoId, task: e.target.value})
    }
  
    const deleteTask = (todoId) => {
      dispatch({ type: 'deleteTask', id: todoId})
    }

  return (
    <div className="flex justify-center space-x-4">
      { isActive ? <input value={todo.task} onChange={(e) => editTask(todo.id, e)} type="text" placeholder="ここにタスクを入力" className="input mb-8" /> :
    <li key={todo.id} className="text-2xl mb-4">{todo.task}</li>}
    <button className="btn" onClick={() => setIsActive(!isActive)}>{isActive ? '保存' : '編集'}</button>
    <button className="btn" onClick={() => deleteTask(todo.id)}>削除</button>
    </div>
  )

  
}