import { useReducer, useState } from "react";
import { TaskList } from "./assets/component/TaskList";
import { Input } from "./assets/component/Input";
import { DispatchContext, todoReducer, TodosContext } from "./assets/reducers/TodoReducers";


let nextId = 1
const App = () => {
  const [text, setText] = useState();
  const [todos, dispatch] = useReducer(todoReducer, [{id:0, task: '寝る！'}])

  function addTask() {
    dispatch({type: 'addTask', id: nextId++, task: text})
    setText('');
  }


  return (
    <TodosContext value={todos}>
      <DispatchContext value={dispatch}>
        <div className="container mx-auto text-center">
        <h1 className="text-4xl my-8">Todoアプリ</h1>
          <Input text={text} addTask={addTask} setText={setText}/>
          <TaskList/>
        </div>
      </DispatchContext>
    </TodosContext>

  )
}

export default App;
