import { useState } from "react";
import { TaskList } from "./assets/component/TaskList";
import { Input } from "./assets/component/Input";


let nextId = 0
const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState();

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
        <Input text={text} addTask={addTask} setText={setText}/>
      <ol>
        {todos.map((todo) => 
            <TaskList todo={todo} editTask={editTask} deleteTask={deleteTask}/>
          )}
      </ol>
    </div>
    </>

  )
}

export default App;
