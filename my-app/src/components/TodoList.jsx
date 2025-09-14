import React, { useEffect } from 'react'
import { useState } from 'react'
import add_icon from '../assets/add_icon.svg'
import remove_icon from '../assets/remove_icon.svg'
import './TodoList.css'

const statuses = ["undone", "inprogress", "done"];


// status = {done, inprogress, undone}
function TaskCard({task, id, status, onRemove, onStatus}) {
    return <div className={`taskcard ${status}`}>
        <p className='task-info'>Task: {task}</p>
        <div className='button-row'>
        <button className='toggle-status' onClick={()=> onStatus(id)}/>
        <button className='remove-button' onClick={()=> onRemove(id)}> <img className='remove-icon' src={remove_icon}/> </button>
        </div>
        
    </div>
}


function TodoList() {
        const [tasks, setTasks] = useState(()=> {
            const saved = localStorage.getItem("tasks");
            return saved ? JSON.parse(saved) :[];
        });
        const [text, setText] = useState('');
        useEffect(()=> {localStorage.setItem("tasks", JSON.stringify(tasks))}, [tasks]);
        function handleAdd (e) {
            e.preventDefault();
            const val = text.trim();
            if (!val) return;
            setTasks( prev=> [{id: Date.now(), text: val, status: 'undone',}, ...prev])
            setText('');
        }
        function handleRemove(id) {
            setTasks(prev => prev.filter(t=> t.id !== id))
        }
        function toggleStatus(id) {
            setTasks(prev => prev.map(task => 
            {
                const idx = statuses.indexOf(task.status);
                const next = (idx+1)%3;
                return task.id === id ? {...task, status: statuses[next]} : task;
            }))
           
        }
        

  return (
    <div className='todo-scroll'>
    <form className='add-row' onSubmit={handleAdd}>
        <input className='input-bar' value={text} onChange={e => setText(e.target.value)} placeholder='Add task (e.g: Work - 19/8/25)'/>
        <button className='add-button' type='submit'>
        <img className='add-icon' src={add_icon}/>
        </button >
    </form>
    <div>   
        {tasks.length === 0 ?  (<div className='notasktodo'>No task to do</div>) : 
        ( tasks.map(task => 
        <TaskCard key={task.id} task={task.text} id={task.id} status={task.status} onRemove={handleRemove} onStatus={toggleStatus}/>)
        )
        }
    </div>
    </div>
  )
}

export default TodoList;