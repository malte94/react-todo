import React, {useState} from 'react';
 
export default function TodoList(props) {
    const[todos, setTodos] = useState([
        { task: "Walk the fish" },
        { task: "Groom Chickens" } 
    ]);


  return (
      <div>
          {todos}
      </div>
  )
}