import React from 'react'
import '../assets/css/todolist.css'
import { useState } from 'react'
import { use } from 'react'

const Todolist = () => {
    const [todo, setTodo] = useState('')
    const [list, setList] = useState([
        {
            id: 1,
            deskripsi: 'Belajar ReactJs',
        },
    ])

    const addTodoHandler = () => {
        const data = {
            id: list.length + 1,
            deskripsi: todo,
        };
        list.push(data);

        setTodo('');
    };

    
  
  return (
    <div class="card todo-section">
        <h3>My Tasks</h3>

        <div className="input-group">
          <input
            type="text"
            id="todo-input"
            placeholder="Tulis tugas baru..."
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTodoHandler}>Add</button>
        </div>

        <ul id="todo-list" className="todo-list">
            {list.map((element,index) =>{
                return(
                    <li key={element.id}>
                        <span>
                            <b>{index + 1}</b> {element.deskripsi}
                        </span>
                    </li>
                )
            })}
        </ul>
      </div>
  )
}

export default Todolist
