import React from 'react'
import { useState } from 'react'
import './TodoList.css'


function TaskCard({task, id, onRemove}) {
    return <div className='taskcard'>
        <p>Công việc: {task} - {id}</p>
        <button onClick={()=> onRemove(id)}>Remove</button>
    </div>
}


function TodoList() {
        const [tasks, setTasks] = useState([]);
        const [text, setTexts] = useState('');
        function handleAdd (e) {
            e.preventDefault();
            const val = text.trim();
            if (!val) return;
            setTasks( prev=> [{id: Date.now(), text: val}, ...prev])
            setTexts('');
        }
        function handleRemove(id) {
            setTasks(prev => prev.filter(t=> t.id !== id))
        }
        

  return (
    <div className='todo-scroll'>
    <form onSubmit={handleAdd}>
        <input value={text} onChange={e => setTexts(e.target.value)} placeholder='Add task'/>
        <button type='submit'>
        Add
        </button >
    </form>
    <div>
        {tasks.length === 0 ?  (<div>No task to do</div>) : 
        ( tasks.map(task => 
        <TaskCard key={task.id} task={task.text} id={task.id}  onRemove={handleRemove}/>)
        )
        }
    </div>
    </div>
    


    


  )
}

export default TodoList;