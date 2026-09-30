import { useState } from "react"
import "./index.css";

function App() {
  const [todo,setTodo]=useState("")
  const [list,setList]=useState([])

  function clickAdd() {
  if (todo.trim() === "") {
  return;
  }
  setList([...list, { text: todo, completed: false }]);
  setTodo("");
  }
  function Delete(id){
    const filterList=list.filter((item,index)=>index !==id)
    setList(filterList)
  }
  function completedTask(id){
    const updatedList =list.map((item,index)=>
    index===id?
  {...item,completed:!item.completed}
:item
);
setList(updatedList);

}

  return (
    <><div className="container">
      <h1>To Do List</h1>
      <div className="input-section">
      <input 
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
       type="text" 
       placeholder="Add a new task..."
       />
      <button onClick={clickAdd}>add</button>
      </div>
      <div className="task-list">
        {
        list.map((item,index) =>(
          <div className="task" key={index}>
            <div className="task-left">
              <input
               type="checkbox"
               checked={item.completed}
               onChange={()=>completedTask(index)}
               />
               <span className={item.completed ?
                "completed":""
               }>
                {item.text}
               </span>
               </div>
               <button
               className="delete"
               onClick={()=>Delete(index)}>
                Delete
               </button>
               </div>
        ))}
        </div>
        </div>
    </>
  )
}

export default App
