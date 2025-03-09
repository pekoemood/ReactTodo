import { useState } from "react";

let nextId = 0
const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState();
  function addTask(e) {
    setTodos((pres) => [...pres, {id: nextId++, task: e.target.value}])
    console.log(todos);
  }

  function inputText() {
    
  }


  return (
    <>
    <div className="container mx-auto text-center">
      <h1 className="text-4xl my-8">Todoアプリ</h1>
      <input value={text} type="text" placeholder="ここにタスクを入力" className="input mb-8" />
      <button onClick={inputText} className="btn mb-8">タスクに追加</button>
      <ol>
        {todos.map((todo) => (
          <li className="text-2xl mb-4">{todo.task}</li>
        )
        )}
      </ol>
    </div>



    </>

  )
}

export default App;
