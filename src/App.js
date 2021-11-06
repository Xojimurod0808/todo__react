import { useState } from 'react';
import './App.scss';
import Todo from './Components/Todo/Todo'

function App() {
  
  let [todo, setTodo] = useState([
    {id: 1, content: '#Task 1', isCompleted: false},
    {id: 2, content: '#Task 2', isCompleted: false},
  ])
  
  function handle(event){
    if(event.code == 'Enter'){
      
      let newTodo = {
        id: new Date().getTime(),
        content: event.target.value.trim(),
        isCompleted: false
      }
      
      setTodo([newTodo, ...todo])
      
      event.target.value = null;
    }
  }
  
  return (
    <>
    <input type="text" onKeyPress={handle}/>
    
    {todo.map(t => <Todo key={t.id} todo={t.content}/>)}
    </>
    );
  }
  
  export default App;
  