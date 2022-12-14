import React from 'react'

export default function TodoList(props) {
  return (
    <>   
        <ul className="todo-list">
          { props.todos.map((todo,index)=>
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" onChange={()=>props.completeTodo(todo.id)} checked={todo.isComplete? true:false}/>
              {!todo.isEditing ?(
              <span onDoubleClick={()=> props.markAsEditing(todo.id)} className={`todo-item-label ${todo.isComplete ? 'line-through':''}`}>{todo.title}</span>
              ):
              (
              <input type="text" onKeyDown={event=>{if(event.key === "Enter"){
                props.updateTodo(event,todo.id);
              } else if (event.key=== 'Escape'){
                props.cancelEdit(event,todo.id);
              }
            
            
            }} onBlur={(event)=>props.updateTodo(event,todo.id)} 
              
              
              className="todo-item-input" Defaultvalue={todo.title} autoFocous />
              
              
              ) }
            </div>
            <button onClick={()=>props.deleteTodo(todo.id)} className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
)}
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>

          <span>3 items remaining</span>
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
          
        </div>
        </>
  )
}
