import { useState } from "react";

let nextId = 0
const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState();
  const [isAcitve, setIsActive] = useState(false);
  function addTask() {
    setTodos((pres) => [...pres, {id: nextId++, task: text}])
    setText('');
  }

  function input(e) {
    setText(e.target.value);
  }

  function deleteTask(todoId) {
    setTodos((pres) => {
      return pres.filter((todo) => todo.id !== todoId)
  })
}

  function editTask(todoId, e) {
    setTodos((prevs) => {
      return prevs.map((todo) => todo.id === todoId ? {...todo, task: e.target.value} : todo)
    })
  }


  return (
    <>
    <div className="container mx-auto text-center">
      <h1 className="text-4xl my-8">Todoアプリ</h1>
      <input value={text} onChange={(e) => input(e)} type="text" placeholder="ここにタスクを入力" className="input mb-8" />
      <button onClick={addTask} className="btn mb-8">タスクに追加</button>
      <ol>
        {todos.map((todo) => 
          <div className="flex justify-center space-x-4">
            { isAcitve ? <input value={todo.task} onChange={(e) => editTask(todo.id, e)} type="text" placeholder="ここにタスクを入力" className="input mb-8" /> :
                                 <li key={todo.id} className="text-2xl mb-4">{todo.task}</li>}
            <button className="btn" onClick={() => setIsActive(!isAcitve)}>{isAcitve ? '保存' : '編集'}</button>
            <button className="btn" onClick={() => deleteTask(todo.id)}>削除</button>
          </div>)
        }
      </ol>
    </div>
    </>

  )
}

export default App;
