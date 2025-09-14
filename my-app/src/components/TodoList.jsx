import React, { useEffect } from 'react'
import { useState } from 'react'
import './TodoList.css'
import remove_icon from '../assets/remove_icon.svg'
import add_icon from '../assets/add_icon.svg'

function TaskCard({task, id, onRemove}) {
    return <div className='taskcard'>
        <p className='task-info'>Công việc: {task} - {id}</p>
        <button className='remove-button' onClick={()=> onRemove(id)}> <img className='remove-icon' src={remove_icon}/> </button>
    </div>
}


function TodoList() {
        const [tasks, setTasks] = useState(()=> {
            const saved = localStorage.getItem("tasks");
            return saved ? JSON.parse(saved) :[];
        });
        const [text, setTexts] = useState('');
        useEffect(()=> {localStorage.setItem("tasks", JSON.stringify(tasks))}, [tasks]);
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
    <form className='add-row' onSubmit={handleAdd}>
        <input className='input-bar' value={text} onChange={e => setTexts(e.target.value)} placeholder='Add task'/>
        <button className='add-button' type='submit'>
        <img className='add-icon' src={add_icon}/>
        </button >
    </form>
    <div>
        {tasks.length === 0 ?  (<div className='notasktodo'>No task to do</div>) : 
        ( tasks.map(task => 
        <TaskCard key={task.id} task={task.text} id={task.id}  onRemove={handleRemove}/>)
        )
        }
    </div>
    </div>
    


    


  )
}

export default TodoList;