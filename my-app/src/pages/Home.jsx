import React from 'react'
import TodoList from '../components/todoList.jsx'

function HomePage({theme}) {
  return (
    <>
    <TodoList theme={theme}/>
    </>
  )
}

export default HomePage