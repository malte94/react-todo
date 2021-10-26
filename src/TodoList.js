import React, {useState} from 'react';
 
export default function TodoList(props) {
    const[todos, setTodos] = useState([
        "Walk the cat",
        "Make the garden",
    ]);

    const getTodos = () => {
        let output = [];
        for(let x = 0; x < todos.length; x++) {
            output = [...output, (<p key={x}>{todos[x]}<button className="btn-delete" onClick={() => deleteItem(x)}>x</button> </p>)];
        }
        return output;
    }

    const deleteItem = (id) => {
        setTodos(todos.splice(id - 1, 1));
    }


  return (
      <div className="todo-list">
          {getTodos()}
      </div>
  )
}