import React, { use, useEffect } from 'react'
import { useState } from 'react'
import add_icon from '../assets/add_icon.svg'
import remove_icon from '../assets/remove_icon.svg'
import toggle_icon from '../assets/toggle_icon.svg'
import edit_icon from '../assets/edit_button.svg'
import discard_icon from '../assets/discard_icon.svg'
import save_icon from '../assets/save_icon.svg'
import './TodoList.css'
import Graph from './Graph'
import './Graph.css'
import { Bar } from 'react-chartjs-2'



const statuses = ["undone", "inprogress", "done"];


// status = {done, inprogress, undone}
function TaskCard({task, id, status, onRemove, onStatus, onEdit, theme}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task);
    function handleSave() {
        if (editText.trim()==='') return;
        onEdit(id, editText);
        setIsEditing(false);
    }
    return <div className={`taskcard ${status} ${theme}`}>
            {isEditing? 
            (<>
            <input className='edit-bar'value={editText} onChange={(e)=> setEditText(e.target.value)}/>  
            <div className='button-row'>
            <button className='save-button' onClick={()=>handleSave()}
            ><img className='save-icon' src={save_icon}/></button>
            <button className='discard-button' onClick={()=>setIsEditing(false)}
            ><img className='discard-icon' src={discard_icon}/></button>
            </div>
            </>)
             : 
            (<>
            <p className='task-info'>{task}</p>
            <div className='button-row'>
            <button className='edit-button'
            onClick={()=>setIsEditing(true)}><img className='edit-icon' src={edit_icon}/></button>
            </div>
            </>)}
            <button className='toggle-status' onClick={()=> onStatus(id)}><img className='toggle-icon' src={toggle_icon}/></button>
            <button className='remove-button' onClick={()=> onRemove(id)}> <img className='remove-icon' src={remove_icon}/> </button>
        </div>  
}


function TodoList({theme}) {
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
        function handleEdit (id, newText) {
            setTasks(prev => prev.map(task =>
            {
                return task.id === id? {...task, text: newText} : task
            }))
        }
        

  return (
    <div className='first-page'>
    <div className={`${theme} todo-scroll`}>
        <form className='add-row' onSubmit={handleAdd}>
            <input className='input-bar' value={text} onChange={e => setText(e.target.value)} placeholder='Add task (e.g: Work - 19/8/25)'/>
            <button className='add-button' type='submit'>
        <img className='add-icon' src={add_icon}/>
        </button >
    </form>
    <div>   
        {tasks.length === 0 ?  (<div className='notasktodo'>No task to do</div>) : 
        ( tasks.map(task => 
        <TaskCard theme={theme} key={task.id} task={task.text} id={task.id} status={task.status} onRemove={handleRemove} onStatus={toggleStatus} onEdit={handleEdit}/>)
        )
        }
    </div>
    </div>
    <div className='graph'>
    <Graph tasks={tasks}/>
    </div>
    </div>
  )
}

export default TodoList;