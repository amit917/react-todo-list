
import '../App.css';
import '../reset.css';
import {useState} from 'react';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

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
function addTodo(todo){
  setTodos([...todos,{
   id:idForTodo,
   title:todo,
   isComplete:false,
     
  }]);
  
  setIdForTodo(prevIdForTodo=> prevIdForTodo+1);

}
function deleteTodo(id){
  //console.log('deleting todo id'+ id);
  setTodos([...todos].filter(todo=> todo.id !== id));
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
        <TodoForm addTodo={addTodo}/>
         {todos.length > 0 ?(
            <TodoList 
            todos={todos}
            completeTodo={completeTodo}
            markAsEditing={markAsEditing}
            updateTodo={updateTodo}
            cancelEdit={cancelEdit}
            deleteTodo = {deleteTodo}


            />
         ):(
          
          <NoTodos />
         
         )}

      </div>
          
    </div>
  );
}

export default App;