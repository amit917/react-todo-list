
import '../App.css';
import '../reset.css';
import {useState} from 'react';

function App() {
  /* Array desconstruction */
  const [todos, setTodos] = useState([{
    id:1, title: 'Finish React Series 1', isComplete:false,
    isEditing:false
  },
  {
    id:2, title: 'Finish React Series 2', isComplete:false,isEditing:false
  },
  {
    id:3, title: 'Finish React Series 3', isComplete:true,isEditing:false
  }





]);
const [todoInput,setTodosInput]=useState('');
const [idForTodo,setIdForTodo]=useState(4);
function addTodo(event){
  event.preventDefault();
  if(todoInput.trim().length === 0){
    return;
  }
  setTodos([...todos,{
   id:idForTodo,
   title:todoInput,
   isComplete:false,
     
  }]);
  setTodosInput('');
  setIdForTodo(prevIdForTodo=> prevIdForTodo+1);

}
function deleteTodo(id){
  //console.log('deleting todo id'+ id);
  setTodos([...todos].filter(todo=> todo.id !== id));
}
function handleInput(event){
  setTodosInput(event.target.value); 
}
function completeTodo(id){
  const updatedTodos= todos.map(todo=>{
   if(todo.id === id){
    todo.isComplete = !todo.isComplete
   }
    return todo;
  });
  setTodos(updatedTodos);
}
function updateTodo(event,id){
  console.log(event.target.value);
  const updatedTodos= todos.map(todo=>{
   if(todo.id === id){
   if(event.target.value.trim().length === 0){
    todo.isEditing = false;
    return todo;
   }
   
    todo.title = event.target.value;
    todo.isEditing = false;
   }
    return todo;
  });
  setTodos(updatedTodos);
}
function cancelEdit(event,id){
  const updatedTodos= todos.map(todo=>{
    if(todo.id === id){
     todo.isEditing = false;
    }
     return todo;
   });
   setTodos(updatedTodos);
}
function markAsEditing(id){
  const updatedTodos= todos.map(todo=>{
    if(todo.id === id){
     todo.isEditing = !todo.isEditing;
    }
     return todo;
   });
   setTodos(updatedTodos);
}
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            value={todoInput}
            onChange={handleInput }

            className="todo-input"

            placeholder="What do you need to do?"

          />
        </form>

        <ul className="todo-list">
          { todos.map((todo,index)=>
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" onChange={()=>completeTodo(todo.id)} checked={todo.isComplete? true:false}/>
              {!todo.isEditing ?(
              <span onDoubleClick={()=> markAsEditing(todo.id)} className={`todo-item-label ${todo.isComplete ? 'line-through':''}`}>{todo.title}</span>
              ):
              (
              <input type="text" onKeyDown={event=>{if(event.key === "Enter"){
                updateTodo(event,todo.id);
              } else if (event.key=== 'Escape'){
                cancelEdit(event,todo.id);
              }
            
            
            }} onBlur={(event)=>updateTodo(event,todo.id)} 
              
              
              className="todo-item-input" Defaultvalue={todo.title} autoFocous />
              
              
              ) }
            </div>
            <button onClick={()=>deleteTodo(todo.id)} className="x-button">
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
      </div>
    </div>
  );
}

export default App;