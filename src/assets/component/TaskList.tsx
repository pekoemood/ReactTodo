import { useState } from "react";

export const TaskList = ({todo, editTask, deleteTask}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex justify-center space-x-4">
      { isActive ? <input value={todo.task} onChange={(e) => editTask(todo.id, e)} type="text" placeholder="ここにタスクを入力" className="input mb-8" /> :
      <li key={todo.id} className="text-2xl mb-4">{todo.task}</li>}
      <button className="btn" onClick={() => setIsActive(!isActive)}>{isActive ? '保存' : '編集'}</button>
      <button className="btn" onClick={() => deleteTask(todo.id)}>削除</button>
    </div>
  )
}

