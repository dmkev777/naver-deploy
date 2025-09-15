import React from 'react'
import TodoList from '../components/todolist.jsx'

function HomePage({theme}) {
  return (
    <>
    <TodoList theme={theme}/>
    </>
  )
}

export default HomePage