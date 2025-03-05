import { useState } from 'react'


function App() {
  const initTask = [{
    id: 1,
    task: '仕事',
  }]

  function generateId() {
    return Math.floor(Math.random() * 90) + 10;
  }

  const [text, setText] = useState('')
  const [todos, setTodos] = useState([]);
  

  const addTodo = () => {
    const newTodos: any = [...todos, { id: generateId(), task: text}];
    setTodos(newTodos);
    setText('');
  }

  const endTask = (_todo) => {
    const task = todos.filter((todo) => todo.id !== _todo.id)
    setTodos(task);
  }


  return (
    <>
    <h1 className='text-center text-4xl mt-8'>
      Todoアプリ
    </h1>
    <div className='text-center mt-8 space-x-4'>
      <input className='border border-blue-500 text-center p-2' type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button className='bg-blue-400 rounded-lg p-2 text-white' onClick={addTodo}>タスクに追加する</button>
    </div>

    <div className='border p-8 mt-8 text-center w-1/2 mx-auto h-full'>
      <ol>
        { todos.map((todo) => {
          return (
            <div className='flex justify-center space-x-4 items-center'>
              <li key={todo.id} className='mt-4 mb-4'>{todo.task}</li> 
              <button className='bg-blue-500 rounded-lg p-1 text-white' onClick={() => endTask(todo)}>完了</button>
            </div>
          )}
        )}
      </ol>
    </div>
    </>
  )
}

export default App
