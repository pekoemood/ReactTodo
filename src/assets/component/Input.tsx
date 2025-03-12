export const Input = ({text, addTask}) => {
  return (
    <>
      <input value={text} onChange={(e) => input(e)} type="text" placeholder="ここにタスクを入力" className="input mb-8" />
      <button onClick={addTask} className="btn mb-8">タスクに追加</button>
    </>

  )
}
