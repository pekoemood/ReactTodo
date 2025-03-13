export const Input = ({text, addTask, setText}) => {
  
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="ここにタスクを入力" className="input mb-8" />
      <button onClick={addTask} className="btn mb-8">タスクに追加</button>
    </>

  )
}
